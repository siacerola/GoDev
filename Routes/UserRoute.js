const express = require('express')
const router = express.Router()
const _ = require('lodash')

const UserModel = require('../Models/UserModel')

router.route("/")
    .post((req, res) => {
        
        const userName = _.upperCase(req.body.userName)
        const userPassword = req.body.userPassword
        const userEmail = req.body.userEmail
        const userPhoneNumber = req.body.userPhoneNumber
        const roleId = req.body.roleId

        UserModel.insertUser(
            200,
            userName,
            userPassword,
            userEmail,
            userPhoneNumber,
            roleId,
            res
        )
    })

    .get((req, res) => {
        UserModel.findAllUser(
            200,
            res
        )
    })

    .delete((req, res) => {
        const userId = req.body.userId
        UserModel.deleteUser(
            200,
            userId,
            res
        )
    })

    .patch((req, res) => {
        const userId = req.body.userId
        const userName = _.upperCase(req.body.userName)
        const userPassword = req.body.userPassword
        const userEmail = req.body.userEmail
        const userPhoneNumber = req.body.userPhoneNumber
        const roleId = req.body.roleId

        UserModel.findAndUpdateUser(
            200,
            userId,
            userName,
            userPassword,
            userEmail,
            userPhoneNumber,
            roleId,
            res
        )
    })


    module.exports = router