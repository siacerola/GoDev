const express = require('express')
const router = express.Router()
const _ = require('lodash')

const ProductModel = require('../Models/ProductModel')

router.route('/')
    .post((req, res) => {
        const prodctName = _.upperCase(req.body.productName)
        const productType = _.upperCase(req.body.productType)

        ProductModel.insertProdct(
            200,
            prodctName,
            productType,
            res
        )
    })

    .get((req, res) => {
        ProductModel.findAllProduct(
            200,
            _.upperCase("get product model"),
            res
        )
    })


module.exports = router