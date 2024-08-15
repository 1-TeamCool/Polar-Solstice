#!/usr/bin/env node

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 30010
const {db, initPromise} = require('./models');


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//get products controller
const productController = require('./controllers/products_controller')
app.use('/api/products', productController)

app.use(express.static('dist'));

app.get(`/*`, (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`)
});


initPromise
    .then(() => {
        db.sequelize.sync().then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        });
    })
    .catch((error) => {
        console.error('Failed to initialize the database and start the server:', error);
    });
