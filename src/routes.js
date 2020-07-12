const express = require('express')
const UserController = require('./controllers/UserController')
const ClientController = require('./controllers/ClientController')
//const UserController = require('./controllers/UserController')

routes = express.Router()

routes.post('/user/signup', UserController.create)
routes.post('/user/signin', UserController.signIn)

routes.post('/client/create', ClientController.create)
routes.get('/client/getall', ClientController.getAll)
routes.get('/client/find/:id', ClientController.getClient)
routes.delete('/client/remove/:id', ClientController.removeClient)

module.exports = routes