const express = require('express')
const router = express.Router()
const _ = require('lodash')

const RoleModel = require('../Models/RoleModel')

router.route("/")
    .post((req, res) => {
        const roleName = _.upperCase(req.body.roleName)
        RoleModel.insertRole(
            200,
            roleName,
            res
        )
    })

    .get((req, res) => {
        RoleModel.findAllRole(
            200,
            _.upperCase("get user role model"),
            res
        )
    })

    .delete((req, res) => {
        const roleId = req.body.roleId
        RoleModel.deleteRole(
            200,
            roleId,
            res
        )
    })

    .patch((req, res) => {
        const roleId = req.body.roleId
        const roleName = _.upperCase(req.body.roleName)
        RoleModel.findAndUpdateRole(
            200,
            roleId,
            roleName,
            res
        )
    })

module.exports = router
