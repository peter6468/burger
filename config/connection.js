//connects to mysql
var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 8889,
//     user: "root",
//     password: "root",
//     database: "burgers_db"
//   });
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
// };
  connection.connect(function(err) {
      if(err) throw err;
      console.log('Connected as id: ' + connection.threadId);
  });

  //exporting this and will import in orm
  module.exports = connection;