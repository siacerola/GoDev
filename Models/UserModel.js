const mongoose = require('mongoose')
const { Schema } = mongoose
const response = require('../Response/response')

const userSchema = new Schema({
    userName: {
        type: String,
        required:true
    },
    userPassword: {
        type: String,
        required:true
    },
    userEmail: {
        type: String,
        required:true
    },
    userPhoneNumber: {
        type: String,
        required:true
    },
    roleId: {
        type: Schema.Types.ObjectId,
        ref:"Role"
    }
})


const User = mongoose.model("User", userSchema)

const insertOne = async (
    statusCode,
    userName,
    password,
    email,
    phoneNumber,
    roleId,
    res
) => {
    const newUser = new User()
    newUser.userName = userName
    newUser.userPassword = password
    newUser.userEmail = email
    newUser.userPhoneNumber = phoneNumber
    newUser.roleId = roleId
    
    const saveUser = await newUser.save()

    let status = ""
    if (newUser === saveUser) status = "successully saved"
    else status = "failed to saved"

    response.insertOne(
        statusCode,
        newUser.userName,
        status,
        res
    )
}

module.exports = {
    insertUser:insertOne
}