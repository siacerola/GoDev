const mongoose = require('mongoose')
const { Schema } = mongoose
const response = require('../Response/response')

const salesSchema = new Schema({
    salesName: {
        type: String,
        required:true
    },
    salesPhoneNumber: {
        type: String,
        required:true
    }
})

const Sales = mongoose.model("Sales", salesSchema)


const insertOne = async (
    statusCode,
    salesName,
    salesPhoneNumber,
    res
) => {
    const newSales = new Sales()
    newSales.salesName = salesName
    newSales.salesPhoneNumber = salesPhoneNumber
    
    const saveSales = await newSales.save()

    let status = ""
    if (newSales === saveSales) status = "successully saved"
    else status = "failed to saved"

    response.insertOne(
        statusCode,
        newSales.salesName,
        status,
        res
    )
}

module.exports = {
    insertSales: insertOne,
    
}