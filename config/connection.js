var mysql = require('mysql2');

var connection = mysql.createConnection({
    host:'127.0.0.1',
    port: 3306,
    user:'root',
    password:'root',
    database:'burgers_db'
});

connection.connect(function(){
    console.log('Connected to mySQL');
})

module.exports = connection;