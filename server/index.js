const express = require('express');
const mysql = require('mysql2');
require('dotenv').config()


const API = express();
API.use(
    express.json()
);

const DB = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD, 
    database : process.env.DB_NAME
})

DB.connect((err)=>{
    if (err) {
        console.error("Connect error: ",err);
        return;
    }
    console.log("Conectado");
})
const PORT = 3000;
API.listen(PORT,()=>{
    console.log("Puerto: ",PORT)
});

API.get("/",(req,res)=>{
    res.send("Hola pupi");
})

API.get("/platos", (req, res) => {
    DB.query("SELECT * FROM restaurante__platos LIMIT 10", (err, results) => {
        if (err) {
            res.status(500).json({ message: err.message }); // Correct way to set status and send JSON
            return;
        }
        res.json(results);
    });
});

API.get("/categoria_plato/:categoria", (req, res) => {
    console.log(req);
    const { categoria } = req.params;
    DB.query("SELECT * FROM restaurante__platos WHERE categoria=?", [categoria], (err, results) => {
        if (err) {
            res.status(500).json({ message: err.message }); // Correct way to set status and send JSON
            return;
        }
        if (results.length === 0) { // Fix for checking if results are empty
            res.status(404).json({ message: "Categoria no encontrada" }); // Send 404 status when no results
        } else {
            res.json(results);
        }
    });
});
