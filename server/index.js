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

API.get("/platos",(req,res)=>{
    DB.query("SELECT * FROM restaurante__platos",(err,results)=>{
        if (err) {
            res.status.json({message:err.message});
            return;
        }
        res.json(results);
    })
})

API.get("/categoria_plato/:categoria",(req,res)=>{
    console.log(req);
    const {categoria} = req.params;
    DB.query("SELECT * FROM restaurante__platos WHERE categoria=?",[categoria],(err,results)=>{
        if (err) {
            res.status.json({message:err.message});
            return;
        }
        if (results=="") {
            res.json({message:"categoria no encontrada"})
        }
        res.json(results);
    })
})