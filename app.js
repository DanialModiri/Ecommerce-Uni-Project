const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index')
mongoose.connect('mongodb://localhost:27017/uni-project-ecommerce', (err) => {
    if(err)
        console.error(err);
    else
        console.log('Running')
});

app.use(bodyParser.json());

app.use(routes);
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});