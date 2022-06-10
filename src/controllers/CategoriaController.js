const Categoria=require('../models/Categoria');

const CategoriaController={};

CategoriaController.index=async(req,res)=>{
    const categoria=await Categoria.get();
    res.json(categoria);
}
CategoriaController.store=async(req,res)=>{
    const data=req.body;
    await Categoria.create(data);
    res.json({msg:"Categoria Agregada"});
}
module.exports=CategoriaController;