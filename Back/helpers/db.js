let mysql = require("mysql");

let connection = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    user: "root",
    password: "mot_de_passe",
    database: "BDD"
});

connection.connect(function(err) {
    if (!err) {
        console.log("Database connected");
    } else {
        console.log("Error while connecting with database");
    }
});

module.exports = connection;
