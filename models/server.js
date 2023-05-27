const express = require ('express')
const{dbConnection}=require('../database/config')//configuracion de conexion a la base de datos 

//creamos la clase server que es la que se unsa en el index 
class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT//Capturamos ala variable de entono donde se configuro el puerto 
        this.ambientePath = '/api/ambientes' //Esta es la url por donde el usuario ve en la web la peticion
        this.routes()//llamar metodo de routes
        this.middlewares()//intermediario o puente para mongo
        this.conectarDB()//para conectarse a la base de datos 
    
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + 'public'))

    }

    routes(){
        this.app.use(this.ambientePath,require('../routes/ambientes'))//ruta fisica de la aplicacion
    
    }

    async conectarDB(){
        await dbConnection()//esperar respuesta del servidor

    }

}   

module.exports = Server



//Escuchando el puerto que congifuramos en el archivo env
