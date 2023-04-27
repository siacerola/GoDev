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

const findAll = async (
    statusCode,
    message,
    res
) => {
    const queryFind = {}
    const queryOption = {
        __v:0
    }

    const findAllUser = await User.find(
        queryFind,
        queryOption
    ).populate('roleId',queryOption).exec()

    response.findAll(
        statusCode,
        findAllUser,
        message,
        res
    )
}

const deleteOne = async (
    statusCode,
    userId,
    res
) => {
    const queryFind = { _id: userId }
    const queryOption = {
        rawResult:true
    }

    const deleteUser = await User.findByIdAndDelete(
        queryFind,
        queryOption
    )

    let status = ""
    if (deleteUser.value!=null) status = "successully deleted"
    else status = "failed delete"

    response.deleteOne(
        statusCode,
        deleteUser.userName,
        status,
        res
    )
}

const findAndUpdate = async (
    statusCode,
    userId,
    userName,
    password,
    email,
    phoneNumber,
    roleId,
    res
) => {
    const queryFind = { _id: userId }
    const queryUpdate = {
        userName: userName,
        userPassword: password,
        userEmail: email,
        userPhoneNumber: phoneNumber,
        roleId:roleId
    }
    const queryOption = {
        rawResult:true
    }
    const updateUser = await User.findByIdAndUpdate(
        queryFind,
        queryUpdate,
        queryOption
    ).exec()

    let status = ""
    if (updateUser.lastErrorObject.updatedExisting === true) status = "successully update"
    else status = "failed update"

    response.findAndUpdate(
        statusCode,
        status,
        res
    )
}

module.exports = {
    insertUser: insertOne,
    findAllUser: findAll,
    deleteUser: deleteOne,
    findAndUpdateUser:findAndUpdate
}