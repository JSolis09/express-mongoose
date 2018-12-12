const express = require('express');
const router = express.Router();
const Product = require('./models/Product');

router.get('/', function(req, res) {
    Product.find(function(err, data){
        if (err) {
            console.error(err);
        }
        res.send({ products: data});
    });
});

router.get('/testSave',function(req, res) {
    let product = new Product({
        name:'Product Test',
        price: 100
    });

    product.save(function(err, data) {
        if (err) {
            console.error(err)
        }
        console.log(data);
        res.send(data);
    });
});

module.exports = router;


