
const {response} = require('express')
const Ambiente = require('../models/ambiente')//importamos el modelo


const ambienteGet = async(req, res = response)=>{
    const {nombre} = req.query//Desestructuracion

    const ambientes= await Ambiente.find()

    res.json({
        ambientes
    })
}

//registrar

const ambientePost = async (req,res=response)=>{
    try{
    const{nombre,ambiente1,fecha,hora,temperatura}=req.query

    const ambiente = new Ambiente ({
        nombre:nombre,
        ambiente1:ambiente1,
        fecha:fecha,
        hora:hora,
        temperatura:temperatura,
        
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



const ambientePut = async(req,res=response)=>{
    const {nombre,ambiente1,fecha,hora,temperatura} = req.query
    let mensaje =""

    try {
        const ambiente = await Ambiente.findOneAndUpdate({nombre: nombre}, {ambiente1:ambiente1, fecha:fecha, hora:hora, temperatura: temperatura})
        mensaje= "La modificación se efectuo correctamente"
    } catch (error) {
        mensaje = "Se presentro un error en la modificacion"
    }
    res.json({
        msg: mensaje,
    })
}


const ambienteDelete = async(req,res=response)=>{
    const {nombre} = req.query
    let mensaje =""

    try {
        const ambiente = await Ambiente.findOneAndDelete({nombre: nombre})
        mensaje= "Se ha eliminado correctamente"
    } catch (error) {
        mensaje = "Se presentro un error en la eliminacion"
    }
    res.json({
        msg: mensaje,
    })
}
module.exports={
    ambienteGet,
    ambientePost,
    ambientePut,
    ambienteDelete
}



