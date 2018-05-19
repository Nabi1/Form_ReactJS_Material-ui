var mysql = require('mysql');

var connection = mysql.createConnection({
  multipleStatements: true,
  host     : 'localhost',
  user     : 'root',
  password : 'Nz1rm1995.',
  database : 'Odyssee'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;
