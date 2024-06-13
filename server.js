const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.port
const db = require('./data/db')

db.connectToMongoDB()
app.use(cors())

app.use(express.json())


app.get('/', (req, res) => {
    res.json({message: 'Welcome Home'})
    console.log("Home")
})


app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
    console.log(process.env.MONGODB_URL)
})

