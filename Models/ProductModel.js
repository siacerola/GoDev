const mongoose = require('mongoose')
const { Schema } = mongoose
const response = require('../Response/response')

const productSchema = new Schema({
    productName: {
        type: String,
        required:true
    },
    productType: {
        type: String,
        required:true
    }
})

const Product = mongoose.model("Product", productSchema)

const insertOne = async (
    statusCode,
    productName,
    productType,
    res
) => {
    const newProdct = new Product()
    newProdct.productName=productName
    newProdct.productType = productType
    
    const saveProdct = await newProdct.save()

    let status = ""
    if (newRole === saveRole) status = "successully saved"
    else status = "failed to saved"

    response.insertOne(
        statusCode,
        newProdct.productName,
        status,
        res
    )
}

const findAll = async () => {
    
}

const deleteOne = async () => {
    
}

const findAndUpdate = async () => {
    
}

module.exports = {
    insertProdct: insertOne,
    findAllProduct:findAll,
    deleteProdct:deleteOne,
    findAndUpdateProdct:findAndUpdate
}