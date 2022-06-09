const express = require('express');
const CategoriaController = require("../controllers/CategoriaController");
const routes=express.Router();

routes.get('/',(req,res)=>{
    res.send('hola mundo');
    res.end();
});
routes.get('/api/get-categoria',CategoriaController.index);
module.exports=routes;