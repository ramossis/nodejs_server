const express=require('express');
const morgan=require('morgan');
const path =require('path');
const routes=require('./routes');

const {json}=require('express');

const app=express();

app.use(morgan('dev'));
app.use(json());

/**
 * ROUTES
 * */ 
app.use(routes);

/**
 * PUBLIC
 * */ 
app.use(express.static(path.join(__dirname,'public')));


/**
 * EJECUTAR SERVIDOR
 * */ 
app.set('port',3000)
app.listen(app.get('port'),()=>{
    console.log("Servidor ejecutandose")
});