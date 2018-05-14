
const mysql = require('mysql');


// Déclaration de la connexion à MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Geronimo@',
  database: 'Homer'
});
console.log('yallah');

module.exports = db;