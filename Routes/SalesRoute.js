const express = require('express')
const router = express.Router()
const _ = require('lodash')

const SalesModel = require('../Models/SalesModel')

router.route('/')
    .post((req, res) => {
        const salesName = _.upperCase(req.body.salesName)
        const salesPhoneNumber = req.body.salesPhoneNumber
        SalesModel.insertSales(
            200,
            salesName,
            salesPhoneNumber,
            res
        )
    })

    .get((req, res) => {
        SalesModel.findAllSales(
            200,
            _.upperCase("get sales model"),
            res
        )
    })

    .delete((req, res) => {
        const salesId = req.body.salesId
        SalesModel.deleteSales(
            200,
            salesId,
            res
        )
    })

    .patch((req, res) => {
        const salesId = req.body.salesId
        const salesName = _.upperCase(req.body.salesName)
        const salesPhoneNumber = req.body.salesPhoneNumber

        SalesModel.findAndUpdateSales(
            200,
            salesId,
            salesName,
            salesPhoneNumber,
            res
        )
    })

module.exports = router
    