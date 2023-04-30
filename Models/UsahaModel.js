const mongoose = require('mongoose')
const { Schema } = mongoose
const response = require('../Response/response')

const UsahaSchema = new Schema({
    usahaName: {
        type: String,
    },
    usahaType: {
        type:String
    }
})

const Usaha = mongoose.model("Usaha", UsahaSchema)

const insertOne = async (
    statusCode,
    usahaName,
    usahaType,
    res
) => {
    const newUsaha = new Usaha()
    newUsaha.usahaName = usahaName
    newUsaha.usahaType = usahaType

    const saveUsaha = await newUsaha.save()

    let status = ""
    if (newUsaha === saveUsaha) status = "successully saved"
    else status = "failed to saved"

    response.insertOne(
        statusCode,
        newUsaha.usahaName,
        status,
        res
    )
}

module.exports = {
    insertUsaha:insertOne
}