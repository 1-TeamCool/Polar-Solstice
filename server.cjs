const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.static('dist'));

app.get(`/*`, (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});