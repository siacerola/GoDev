const express = require('express')
const router = express.Router()
const _ = require('lodash')

const UserRoleModel = require('../Models/RoleModel')

router.route("/")
    .post((req, res) => {
        const roleName = _.upperCase(req.body.roleName)
        UserRoleModel.insertRole(
            200,
            roleName,
            res
        )
    })

module.exports = router
