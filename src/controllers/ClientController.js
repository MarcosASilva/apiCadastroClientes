const Client = require('../models/Client')
const  mongoose  = require('mongoose')

require('dotenv/config')

module.exports = {
    async create(req, res) {

        const {
            email
        } = req.body
        if (await Client.findOne({
                email
            })) {
            return res.status(400).send({
                error: 'Email já existente'
            });
        }

        const client = await Client.create(req.body)

        return res.status(201).json(client)
    },
    async getAll(req, res) {


        const client = await Client.find({
            erased: 0
        })
        if (client) {
           
                return res.status(201).json(client)



        } else {
            return res.status(401).send({
                error: 'Não há usuários cadastrados'
            });
        }



    }  ,
      async getClient(req, res) {


        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
             res.status(401).send({
            error: "Formato Inválido"
        }) ;
            return;
        }

        const client = await Client.findById(req.params.id)
        if (client) {
           
                return res.status(201).json(client)



        } else {
            return res.status(401).send({
                error: 'Cliente não encontrado'
            });
        }



    },
    async removeClient(req,res){

       const client =  await Client.findById(req.params.id)

       if(client){
           client.set({
               erased: 1
           })
           return res.status(200).send({
               msg: "Cliente apagado com sucesso"
           })
       }else{
           console.log(client.erased);
           return res.status(401).send({
            error: 'Cliente não encontrado ou já deletado'
        });
       }



    }
}
