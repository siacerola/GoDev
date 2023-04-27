const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()
const db = require('./connection')

const RoleRoute = require('./Routes/RoleRoute')

const app = express()

app.use(
    bodyParser.json()
)

const PORT = process.env.PORT || 3000

const dbName = "GoDevDB"
const mongoUri = "mongodb://127.0.0.1:27017"

db.connectDB()

app.use('/role', RoleRoute)

db.connectDB(
    mongoUri,
    dbName
).then(() => {
    app.listen(PORT, () => {
        console.log(`listening on PORT: ${PORT}`);
    })
})