// Modules
const express = require('express');
const mysql = require('mysql');

// Mysql connection
  let connection = mysql.createConnection({
    host: "localhost", user: "root",
    password: "doyouknowthebendo", database: "form" 
   });  


module.exports = connection;
