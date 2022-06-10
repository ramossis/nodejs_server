const db = require('../db');
const Categoria={};

Categoria.get=async()=>{
    return await db.query('select * from categoria');
}
Categoria.create= async(data)=>{
    return await db.query('insert into categoria set ?',[data]);
}
module.exports=Categoria;