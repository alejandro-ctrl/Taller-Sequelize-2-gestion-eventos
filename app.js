const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const eventoRoutes = require("./Routers/eventoRouters");
const usuarioRoutes=require ("./Routers/usuarioRouters")

// Llamado a la base de datos
const sequelize = require("./config/database");

// BODY json
app.use(express.json());

app.use("/api/", eventoRoutes);
app.use("api/", usuarioRoutes)


// Llamada al servidor y DB
let startDB = async () => {
  try {
    await sequelize.sync(); //{ alter: true }
    console.log("Base de datos sincronizada correctamente.");
    app.listen(port, () => {
      console.log("El servidor está corriendo en el puerto:", port);
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};


startDB();
