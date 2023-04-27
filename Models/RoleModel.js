const mongoose = require('mongoose')
const { Schema } = mongoose
const response = require('../Response/response')

const roleSchema = new Schema({
    roleName: {
        type: String,
        required:true
    }
})

const Role = mongoose.model("role", roleSchema)

const insertOne = async (
    statusCode,
    roleName,
    res
) => {
    const newRole = new Role()
    newRole.roleName = roleName
    
    const saveRole = await newRole.save()
    let status = ""
    if (newRole === saveRole) status = "successully saved"
    else status = "failed to saved"
    
    res.status(statusCode).json({
        message: `${newRole.roleName} ${status}`,
        statusCode:statusCode
    })
}

const findAllRole = async (
    statusCode,
    message,
    res
) => {
    const queryFindAll = {}
    const queryOption = {
        __v:0
    }

    const findAll = await Role.find(
        queryFindAll,
        queryOption
    )

    response.findAll(
        statusCode,
        message,
        findAll
    )


}

module.exports = {
    insertRole: insertOne,
    findAllRole:findAllRole
}