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


    module.exports = router