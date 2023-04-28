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
    if (newProdct === saveProdct) status = "successully saved"
    else status = "failed to saved"

    response.insertOne(
        statusCode,
        newProdct.productName,
        status,
        res
    )
}

const findAll = async (
    statusCode,
    message,
    res
) => {
    const queryFind = {}
    const queryOption = {
        __v:0
    }

    const findAllProduct = await Product.find(
        queryFind,
        queryOption
    )

    response.findAll(
        statusCode,
        findAllProduct,
        message,
        res
    )
}

const deleteOne = async (
    statusCode,
    idProduct,
    res
) => {
    const queryFind = { _id: idProduct }
    const queryOption = {
        rawResult:true
    }

    const deleteProdct = await Product.findByIdAndDelete(
        queryFind,
        queryOption
    ).exec()

    let status = ""
    if (deleteProdct.value != null) status = "successully delete"
    else status = "failed delete"

    response.deleteOne(
        statusCode,
        deleteProdct.value.productName,
        status,
        res
    )
}

const findAndUpdate = async () => {
    
}

module.exports = {
    insertProdct: insertOne,
    findAllProduct:findAll,
    deleteProdct:deleteOne,
    findAndUpdateProdct:findAndUpdate
}