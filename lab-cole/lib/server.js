'use strict';

require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan');

const express = require('express');
let app = express();

const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient:true});

let http = null;
let isRunning = false;

let app.use(cors());
let app.use(morgan('dev'));

//Routes
app.use(require('../routes/foo'));
app.use(require('../routes/bar'));

//404 Handler
app.use('*', (req, res, next) => {
    res.sendStatus(404);
    next();
})

//middleware stuff pending