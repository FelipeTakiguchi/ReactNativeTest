const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://felipentakiguchi:MX0sg6lV3F3fIEv4@cluster0.vprguda.mongodb.net/?retryWrites=true&w=majority");

const db = mongoose.connection;
module.exports = db;