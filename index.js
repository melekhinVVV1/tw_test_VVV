const express = require('express');
const index = express();
require('dotenv').config();
const port = 8000;

index.get('/', (req, res) => {
    res.send(`Hello, World! ${process.env.TITLE}`);
});


index.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});