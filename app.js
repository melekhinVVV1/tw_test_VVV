const express = require('express');
const app = express();
require('dotenv').config();
const port = 81;

app.get('/', (req, res) => {
    res.send(`Hello, World! ${process.env.TITLE}`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});