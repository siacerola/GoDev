const express = require('express')
const router = express.Router()
const _ = require('lodash')

const ProductModel = require('../Models/ProductModel')

router.route('/')
    .post((req, res) => {
        const prodctName = _.upperCase(req.body.prodctName)
        const productType = _.upperCase(req.body.productType)

        ProductModel.insertProdct(
            200,
            prodctName,
            productType,
            res
        )
    })


module.exports = router