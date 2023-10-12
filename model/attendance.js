const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    a1: String,
    a2: String,
    a3: String,
    b1: String,
    b2: String,
    date: String,
    countera: Number,
    counterb: Number
})

module.exports = mongoose.model('attendance', Schema)