//Définition des variables de connection
const mysql = require('mysql');

const parameters = {
  host     : 'localhost',
  user     : 'root',
  password : 'S3cr3t',
  database : 'init'
};

const connection = mysql.createConnection(parameters);
// TODO: a adapter aux paramètres de la base de donnée du fournisseur en production

module.exports = connection;