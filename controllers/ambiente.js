
const {response} = require('express')
const Ambiente = require('../models/ambiente')//importamos el modelo


const ambienteGet = async(req, res = response)=>{
    const {ambiente1} = req.query//Desestructuracion

    const ambientes= await Ambiente.find()

    res.json({
        ambientes
    })
}

//registrar

const ambientePost = async (req,res=response)=>{
    try{
    const{ambiente1,fecha,hora,temperatura,nombre}=req.query

    const ambiente = new Ambiente ({
        ambiente1:ambiente1,
        fecha:fecha,
        hora:hora,
        temperatura:temperatura,
        nombre:nombre
    })
   await ambiente.save()

    res.json({
        
            msg:'La insercción se eféctuo correctamente'

    })
    }catch (error) {
            console.error(error);
            res.status(500).json({
                msg:'La inserción no fue exitosa ocurrió un error '
            })
        }
}

module.exports={
    ambienteGet,
    ambientePost
}



