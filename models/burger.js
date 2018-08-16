 var orm = require('../config/orm.js');

 var burger = {
     all: function(cb) {
         //inserting burgers as our table input, running function of res a cb
         //wh/wil be sent into our burgers_controller.js
         orm.all('burgers', function(res) {
             cb(res);
         })
     },

     update: function(id,cb) {
         orm.update('burgers', id, cb)
     },

     create: function(name,cb) {
         orm.create('burgers', name, cb);
     }
 }

 module.exports = burger;