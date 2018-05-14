const mysql  = require('mysql');

const connection = mysql.createConnection ({
  host     : 'sql7.freemysqlhosting.net',
  user     : 'sql7235873',
  password : 'pa25zGhfj6',
  database : 'sql7235873'
});

module.exports = connection;