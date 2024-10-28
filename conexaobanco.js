var mysql = require("mysql");

var conecteBanco = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "ribeiroplanejados"
});

module.exports = conecteBanco;
