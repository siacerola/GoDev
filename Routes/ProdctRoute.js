const express = require('express')
const router = express.Router()
const _ = require('lodash')

const ProductModel = require('../Models/ProductModel')

router.route('/')
    .post((req, res) => {
        const productName = _.upperCase(req.body.productName)
        const productType = _.upperCase(req.body.productType)

        ProductModel.insertProdct(
            200,
            productName,
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

    .delete((req, res) => {
        const productId = req.body.productId
        ProductModel.deleteProdct(
            200,
            productId,
            res
        )
    })

    .patch((req, res) => {
        const productId = req.body.productId
        const productName = _.upperCase(req.body.productName)
        const productType = _.upperCase(req.body.productType)

        ProductModel.findAndUpdateProdct(
            200,
            productId,
            productName,
            productType,
            res
        )
    })



module.exports = router