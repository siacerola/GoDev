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

const findAll = async (
    statusCode,
    message,
    res
) => {
    const queryFind = {}
    const queryOption = {
        __v:0
    }

    const findAllSales = await Sales.find(
        queryFind,
        queryOption
    )

    response.findAll(
        statusCode,
        findAllSales,
        message,
        res
    )
}

const deleteOne = async (
    statusCode,
    idSales,
    res
) => {
    const queryFind = { _id: idSales }
    const queryOption = {
        rawResult:true
    }

    const deleteSales = await Sales.findByIdAndDelete(
        queryFind,
        queryOption
    ).exec()

    let status = ""
    if (deleteSales.value != null) status = "successully delete"
    else status = "failed delete"

    response.deleteOne(
        statusCode,
        deleteSales.value.salesName,
        status,
        res
    )
}

const findAndUUpdate = async (
    statusCode,
    idSales,
    salesName,
    salesPhoneNumber,
    res
) => {
    const queryFind = { _id: idSales }
    const queryUpdate = {
        salesName: salesName,
        salesPhoneNumber:salesPhoneNumber
    }
    const queryOption = {
        rawResult:true
    }

    const updateSales = await Sales.findByIdAndUpdate(
        queryFind,
        queryUpdate,
        queryOption
    ).exec()

    let status = ""
    if (updateSales.lastErrorObject.updatedExisting === true) status = "successully update"
    else status = "failed update"

    response.findAndUpdate(
        statusCode,
        status,
        res
    )
}

module.exports = {
    insertSales: insertOne,
    findAllSales: findAll,
    deleteSales: deleteOne,
    findAndUpdateSales:findAndUUpdate
    
}