const express = require('express')
const config = require('./config')
const colors = require('colors')
const path = require('path')
const socketIO = require('socket.io')
const http = require('http')

const app = express()
const port = process.env.PORT
const publicPath = path.resolve(__dirname, '../public')
const server = http.createServer(app)

module.exports.io = socketIO(server)
require('./sockets/socket')

app.use(express.static(publicPath))
app.use("/images",express.static(path.resolve('/images')));

server.listen(port, (error) =>{ 
    if(error) throw new Error(error)
    else console.log(`Server listening on port ${colors.yellow(port)}`)
})