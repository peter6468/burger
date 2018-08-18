//importing connection.js
var connection = require('./connection.js');

var orm = {
    all: function (tableInput, cb) {
        //could be called anything 
        var query = `Select * from ${tableInput};`
        connection.query(query, function (err, result) {
            if (err) throw err;
            //using cb to pass the result into our next fille in the file system models folder
            cb(result);
        })
    },
    // 
    update: function (tableInput, condition, cb) {
        var query = `Update ${tableInput} Set devoured=true WHERE id = ${condition};`
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    create: function (tableInput, val1, val2, cb) {
        var query = `Insert into ${tableInput} (burger_name, burger_price) values ('${val1}', ${val2});`
        console.log(query);
        //connection.query('INSERT INTO '+tableInput+ " (burger_name) VALUES ('"+val+"');",
        connection.query(query,function (err, result) {
                if (err) throw err;
                cb(result);
            })

    }
}


module.exports = orm;