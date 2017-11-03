'use strict';

const mongoose = require('mongoose');
const Bar = require('./bar');

const fooSchema = mongoose.Schema({
    fooWho: {type: String, required: true},
    fooWhat: {type: String, required: true},
    fooWhy: {type: String, required: true},
    fooWhen: {type: String, required: true},
    fooHow: {type: String, required: true}
    bar: {type: mongoose.Schema.Types.ObjectID, ref:'teams'}
});