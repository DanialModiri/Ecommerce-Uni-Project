require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index')
const cors = require('cors')
const validationMiddleware = require('./middlewares/mongooseErrorMiddleware')

mongoose.connect('mongodb://localhost:27017/uni-project-ecommerce', (err) => {
    if(err)
        console.error(err);
    else
        console.log('Running')
});
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(routes);
app.use(validationMiddleware);
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});