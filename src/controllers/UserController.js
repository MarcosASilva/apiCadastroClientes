const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Client = require('../models/Client')
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
    async signIn(req, res) {

        const {
            email,
            senha
        } = req.body
        const user = await User.findOne({
            email
        })
        if (user) {
            if (bcrypt.compareSync(req.body.senha, user.senha)) {
                const id = user._id
                const token = jwt.sign({
                    id
                }, process.env.SECRET, {
                    expiresIn: 86400
                })
                const ultimo_login = Date.now()
                user.set({
                    ultimo_login: ultimo_login,
                    token: token
                })
                await user.save()
                return res.status(201).json(user)
            } else {
                // Passwords don't match
                return res.status(400).send({
                    error: 'Senha não correspondente'
                });
            }


        } else {
            return res.status(401).send({
                error: 'Usuario não existente'
            });
        }

        // const user = await User.create(req.body)


    },



}
