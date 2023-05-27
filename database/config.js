
const mongoose = require ('mongoose')//importamos libreria que perm,ite la conexion a la base de datos mongodb
const dbConnection = () =>{
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexion exitosa a BD')
    }
    catch(error){
        console.log('Error de Conexion a BD')
        throw error('Error conectando a la base de datos ')

    }
}

//exportamos candena de conexio a db
module.exports = {dbConnection}
