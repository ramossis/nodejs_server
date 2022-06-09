const db = require('../db');
const Categoria={};

Categoria.get=async()=>{
    return await db.query('select * from categoria');
}
module.exports=Categoria;