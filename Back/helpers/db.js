let mysql = require('mysql');

let connection = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: 'XXXX',
    database: 'LOdysseyDHomer'
});

connection.connect(function(err) {
    if (!err) {
        console.log('Database connected');
    } else {
        console.log('No connection with database');
    }
});

module.exports = connection;