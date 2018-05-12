let mysql = require("mysql");

let connection = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    user: "tonidentifiant",
    password: "tonmotdepasse",
    database: "tabdd"
});

connection.connect(function(err) {
    if (!err) {
        console.log("Database connected");
    } else {
        console.log("Error while connecting with database");
    }
});

module.exports = connection;
