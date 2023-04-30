const mongoose = require('mongoose')
const { Schema } = mongoose

const response = require('../Response/response')

const CustomerSchema = new Schema({
    customerName: {
        type: String,
        required:true
    },
    custommerAddress: {
        type: String,
    }
})