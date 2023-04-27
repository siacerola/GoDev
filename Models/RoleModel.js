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

    response.insertOne(
        statusCode,
        newRole.roleName,
        status,
        res
    )
}

const findAllRole = async (
    statusCode,
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
        findAll,
        res
    )
}


const deleteOne = async (
    statusCode,
    idRole,
    res
) => {
    const queryFind = { _id: idRole }
    const queryOption = {
        rawResult:true
    }

    const deleteRole = await Role.findByIdAndDelete(
        queryFind,
        queryOption
    ).exec()

    let status = ""
    if (deleteRole.value != null) status = "successully delete"
    else status = "failed delete"

    response.deleteOne(
        statusCode,
        deleteRole.value.roleName,
        status,
        res
    )
}

const findAndUpdate = async (
    statusCode,
    idRole,
    roleName,
    res
) => {
    const queryFind = { _id: idRole }
    const queryUpdate = {
        roleName:roleName
    }
    const queryOption = {
        rawResult:true
    }

    const updateRole = await Role.findByIdAndUpdate(
        queryFind,
        queryUpdate,
        queryOption
    ).exec()

    let status = ""
    if (updateRole.lastErrorObject.updatedExisting === true) status = "successully update"
    else status = "failed update"

    response.findAndUpdate(
        statusCode,
        status,
        res
    )


}

module.exports = {
    insertRole: insertOne,
    findAllRole: findAllRole,
    deleteRole: deleteOne,
    findAndUpdateRole:findAndUpdate
}