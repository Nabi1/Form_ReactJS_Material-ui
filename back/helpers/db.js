const mysql = require('mysql');
const express = require('express');
const router = express.Router();


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Z0upette',
    database: 'odyssey'
});

module.exports = connection;