const {Router} =  require('express')//llama el router de la libreria exprrees
const route = Router()

const { ambienteGet, ambientePost, ambientePut, ambienteDelete} =require ('../controllers/ambiente')

route.get('/',ambienteGet)
route.post('/', ambientePost)
route.put('/', ambientePut)
route.delete('/', ambienteDelete)

module.exports = route