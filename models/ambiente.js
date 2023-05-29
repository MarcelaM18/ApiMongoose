const {Schema, model, default:mongoose} = require ('mongoose')

//Migracion de base datos
const AmbienteSchema = new Schema({

    nombre:{
        type: String,
        required:[true, 'El campo nombre usuario es requerido']
    },
    ambiente1:{
        type: String,
        required:[true,'El campo ambiente es requerido'],
        enum:['701','702','703','704','705','801','802','803','804','805']
    },

    fecha:{
        type: Date,
        required:['El campo fecha es requerido']

    },
    hora:{
        type: String,
        required:[true, 'La hora es  requerida']
    },

    temperatura:{
        type: String,
        required:[true, 'El campo temperatura es requerido'],
        min:-5, 
        max:50
    },

})

module.exports = model('ambiente', AmbienteSchema)//Exportamos el modelo
