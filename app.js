const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/testDBCrud'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open',function() {
    console.log("Connected....")
})

app.use(express.json())

const testRouter = require('./routes/testEntities')
app.use('/testEntity', testRouter)

app.listen(9000, function(){
    console.log("Server started.....")
})