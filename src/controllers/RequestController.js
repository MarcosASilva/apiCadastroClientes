/* const Client = require('../models/Client')
require('dotenv/config')

module.exports = {
    async create(req, res) {

        const {
            email
        } = req.body
        if (await User.findOne({
                email
            })) {
            return res.status(400).send({
                error: 'Email já existente'
            });
        }

        const user = await User.create(req.body)

        return res.status(201).json(user)
    },
    async getAll(req, res) {

        const client = await Client.find()
        if (client) {

                return res.status(201).json(client)
       

        } else {
            return res.status(401).send({
                error: 'Não há usuários cadastrados'
            });
        }

        // const user = await User.create(req.body)


    }
}
 */