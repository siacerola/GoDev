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

module.exports = router
    