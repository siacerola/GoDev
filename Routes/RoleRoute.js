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
            _.upperCase("get user role model"),
            res
        )
    })

    .delete((req, res) => {
        const roleId = req.body.roleId
        UserRoleModel.deleteRole(
            200,
            roleId,
            res
        )
    })

    .patch((req, res) => {
        const roleId = req.body.roleId
        const roleName = _.upperCase(req.body.roleName)
        UserRoleModel.findAndUpdateRole(
            200,
            roleId,
            roleName,
            res
        )
    })

module.exports = router
