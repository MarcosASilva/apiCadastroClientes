const mongoose = require("mongoose")

RequestSchema = mongoose.Schema({
    UserId: Number,
    ClientId: Number,
    dataCadastro: {
        type: Date,
        default : Date.now
    },
    itemDescription : String,
    requestDescription: String
})

module.exports = mongoose.model("Request", RequestSchema)