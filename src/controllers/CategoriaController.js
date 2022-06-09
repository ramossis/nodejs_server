const Categoria=require('../models/Categoria');

const CategoriaController={};

CategoriaController.index=async(req,res)=>{
    const categoria=await Categoria.get();
    res.json(categoria);
}
module.exports=CategoriaController;