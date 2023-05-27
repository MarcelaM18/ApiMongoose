const {Router} =  require('express')//llama el router de la libreria exprrees
const route = Router()

const { ambienteGet, ambientePost} =require ('../controllers/ambiente')

route.get('/',ambienteGet)
route.post('/', ambientePost)

module.exports = route