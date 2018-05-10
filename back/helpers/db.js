const mysql = require('mysql');

let connection = mysql.createConnection({
 		host: "localhost",
 		user: "root",
 		password: "root",
 		database: "odyssey_homer"
});

connection.connect(function(err){
  if(!err) {
      console.log("Database is connected...");
  } else {
      console.log("Error connecting database...");
  }
});

module.exports = connection;
