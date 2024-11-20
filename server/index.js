const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const API = express();
API.use(express.json());

const DB = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

DB.connect((err) => {
    if (err) {
        console.error("Connect error: ", err);
        return;
    }
    console.log("Conectado");
});

const PORT = 3000;
API.listen(PORT, () => {
    console.log("Puerto: ", PORT);
});

API.get("/", (req, res) => {
    res.send("Hola pupi");
});

// Endpoint para obtener los primeros 10 platos
API.get("/platos", (req, res) => {
    DB.query("SELECT * FROM restaurante__platos LIMIT 10", (err, results) => {
        if (err) {
            res.status(500).json({ message: err.message });
            return;
        }
        res.json(results);
    });
});

// Endpoint para obtener platos por categoría
API.get("/categoria_plato/:categoria", (req, res) => {
    const { categoria } = req.params;
    DB.query("SELECT * FROM restaurante__platos WHERE categoria=?", [categoria], (err, results) => {
        if (err) {
            res.status(500).json({ message: err.message });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ message: "Categoria no encontrada" });
        } else {
            res.json(results);
        }
    });
});

// Endpoint para registrar un nuevo usuario
API.post("/register", (req, res) => {
    const { nombre_Usuario, apellido_Usuario, foto_Url_Usuario, telefono, email, contrasenia } = req.body;

    // Validar si los campos son proporcionados
    if (!nombre_Usuario || !apellido_Usuario || !foto_Url_Usuario || !telefono || !email || !contrasenia) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    // Verificar si el usuario ya existe
    DB.query("SELECT * FROM restaurante__usuarios WHERE email = ?", [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: "El usuario con este email ya existe" });
        }

        // Insertar el nuevo usuario
        DB.query("INSERT INTO restaurante__usuarios (nombre_Usuario, apellido_Usuario, foto_Url_Usuario, telefono, email, contrasenia) VALUES (?, ?, ?, ?, ?, ?)",
            [nombre_Usuario, apellido_Usuario, foto_Url_Usuario, telefono, email, contrasenia], // No se hace hash de la contraseña
            (err, result) => {
                if (err) {
                    return res.status(500).json({ message: err.message });
                }
                res.status(201).json({ message: "Usuario registrado exitosamente", userId: result.insertId });
            });
    });
});

// Endpoint para login de usuario
API.post("/login", (req, res) => {
    const { email, contrasenia } = req.body;

    // Validar si el email y la contraseña fueron proporcionados
    if (!email || !contrasenia) {
        return res.status(400).json({ message: "El email y la contraseña son requeridos" });
    }

    // Verificar si el usuario existe
    DB.query("SELECT * FROM restaurante__usuarios WHERE email = ?", [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const user = results[0];

        // Comparar la contraseña proporcionada con la almacenada (sin cifrado)
        if (user.contrasenia !== contrasenia) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        res.status(200).json({ message: "Inicio de sesión exitoso", userId: user.ID_USUARIO, nombre: user.nombre_Usuario });
    });
});
