const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()
const db = require('./connection')

const RoleRoute = require('./Routes/RoleRoute')
const UserRoute = require('./Routes/UserRoute')
const SalesRoute = require('./Routes/SalesRoute')
const ProductRoute = require('./Routes/ProdctRoute')

const app = express()

app.use(
    bodyParser.json()
)

const PORT = process.env.PORT || 3000

const dbName = "GoDevDB"
const mongoUri = "mongodb://127.0.0.1:27017"

db.connectDB()

app.use('/role', RoleRoute)
app.use('/user', UserRoute)
app.use('/sales', SalesRoute)
app.use('/product', ProductRoute)



db.connectDB(
    mongoUri,
    dbName
).then(() => {
    app.listen(PORT, () => {
        console.log(`listening on PORT: ${PORT}`);
    })
})