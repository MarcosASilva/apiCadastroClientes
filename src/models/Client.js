const mongoose = require('mongoose')
ClientSchema = new mongoose.Schema({
    nome: String,
    email: String,
    cnpj: String ,
    telefone: String,
    endereco: {
        rua: String,
        numero: Number,
        bairro: String ,
        cidade : String,
        UF : String
    },
    erased : {
        type: Number,
        default: 0
    },
    data_criacao: {
        type: Date,
        default: Date.now
    },
    data_atualizacao: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Client", ClientSchema)
