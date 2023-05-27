require ('dotenv').config()//importar paquetes de variable de entorno
const Server = require('./models/server')//improtamos la clase
const server = new Server()//instanciando el objeto
server.listen()