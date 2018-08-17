var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');



router.get('/', function(req, res){
    //passing burger data into function,eventually will add in burger data
    //as what we are goingto be sending in2 index.handlebars
    //we are calling burger.all w/in burger.js file,wh/is calling orm.all w/in orm.js file
    //**server.js calls all this */
    burger.all(function(burger_data) {
        console.log('yummy');
        console.log(burger_data);
        console.log('tasty');
        //
        res.render('index', {burger_data });
    })
})
//put
router.put('/burgers/update', function(req,res) {
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect('/');
    });
});

router.post('/burgers/create', function(req, res) {
    //burger.create(req.body.burger_name, function(results) {
    burger.create(req.body.burger_name, req.body.burger_price, function(results) {    
        res.redirect('/');
    })
})

//**could be wrong */
module.exports = router;
//module.exports = burgers_controllers;

