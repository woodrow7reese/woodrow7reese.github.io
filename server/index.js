require('dotenv').config()
const express = require('express')
const port = process.env.PORT

const mongoose = require('mongoose')
const uri = process.env.DB_URL

const routes = require('./routes/routes')
const user = require('./routes/user')

mongoose.connect(uri)
const db = mongoose.connection
db.on('error', (e) => {
    console.log(e)
})

db.once('connected', () => {
    console.log('DB connected')
})

const app = express()

app.use(express.json())
app.use('/api', routes)
app.use('/api', user)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

