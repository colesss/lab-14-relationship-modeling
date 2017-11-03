'use strict';

const mongoose = require('mongoose');
const Foo = require('./foo');

const barSchema = mongoose.Schema({
    barWho: {type: String, required: true},
    barWhat: {type: String, required: true},
    barWhy: {type: String, required: true},
    barWhen: {type: String, required: true},
    barHow: {type: String, required: true}
    foo: {type: mongoose.Schema.Types.ObjectID, ref:'teams'}
});