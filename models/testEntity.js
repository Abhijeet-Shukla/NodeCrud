const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    tech:{
        type: String,
        required: true
    },

    working:{
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Entity', testSchema)
