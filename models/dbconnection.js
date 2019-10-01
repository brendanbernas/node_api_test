const mysql = require('mysql');
const port = process.env.PORT || 4205;

if (port === 4205) {

  var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'appuser',
    password: 'appuser',
    database: 'cannabis_schema'
  });

} else {

  // live server details (same for now)
  var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'appuser',
    password: 'appuser',
    database: 'cannabis_schema'
  });

}

connection.connect();

module.exports = connection;
