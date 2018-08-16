//connects to mysql
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
//function(err) is a callback
  connection.connect(function(err) {
      if(err) throw err;
      console.log('Connected as id: ' + connection.threadId);
  });

  //exporting this and will import in orm
  module.exports = connection;