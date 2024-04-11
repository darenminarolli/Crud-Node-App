const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const app = express()

const productsRoute = require('./routes/product.routes.js')
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// routes

app.use("/api/products", productsRoute)
const uri= process.env.DB_CONNECTION_URI
mongoose.connect(uri)
    .then(() => {

        app.listen(process.env.PORT || 6969, () => {
            console.log('listening on port 6969')
        })

    }).catch(err => console.log('Connection Failed!'))