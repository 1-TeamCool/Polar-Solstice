const router = require('express').Router();
const { Op } = require('sequelize');
const { db } = require('../models');

router.get('/', async (req, res) => {
    try {
        const products = await  db.Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
