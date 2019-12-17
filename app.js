const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/uni-project-ecommerce', (err) => {
    if(err)
        console.error(err);
    else
        console.log('Running')
});

app.use(bodyParser.json());
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});