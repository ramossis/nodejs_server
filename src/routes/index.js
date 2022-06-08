const express = require('express');
const routes=express.Router();

routes.get('/',(req,res)=>{
    res.send('hola mundo');
    res.end();
});

module.exports=routes;