const express = require('express');
const bodyParser = require('body-parser')
const controller = require(`${process.env.PWD}/controller/searchController.js`)
const cors = require('cors')

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))


    .get('/item', controller.getProducts)
    .get('/item/:id', controller.getProduct)
    .get('/item/:id/description', controller.getDescription)
    .get('/currencies/:currency', controller.getCurrency)



    .use(express.static('./public'))

    .use(function (error, req, res, next) {
        console.log('Se produjo un error ' + error)
    })



module.exports = app;