const express = require('express');
const AddProduct = require('../Controller/Product/CreatProduct');
const Route = express.Router();

Route.post("/product", AddProduct);

module.exports = Route;