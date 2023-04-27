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

    .get((req, res) => {
        UserRoleModel.findAllRole(
            200,
            `successfully get all role user model`,
            res
        )
    })

module.exports = router
