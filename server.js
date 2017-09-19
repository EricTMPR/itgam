// Cargando modulos de node
const express = require("express"),
      path = require("path"),
      config = require("./server/configure");
 var  app = express();


//Estableciendo unas variables de entorno 
app.set("port", process.env.PORT || 3000);
app.set("ip",process.env.IP || "0.0.0.0");

//Configuracion especia, path.join se usa para unir la ruta por los diferentes sistemas operativos
app.set("views",path.join(__dirname,"views"));

//Aplicando configuraciones generales
app = config(app);

//Creando una ruta de prueba
app.get("/",(req,res)=>{
    res.send("Hola pinche putita te pones bien cachonda hija de tu puta madre");
})

//Consultado las variables de entorno de la aplicacion 
const IP = app.get("ip"),
      PORT = app.get("port");

//Iniciando el servidor 
app.listen(PORT,IP,(err)=>{
    if(err)
    {
      console.log(`> Error en el server.js ln32: ${err}`);
      
    }
    console.log(`> Server escuchando en http://${IP}:${PORT}...`);
    });
