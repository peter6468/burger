var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
//app.use(express.static(__dirname + '/public'));
//app.use(__dirname + '/public', express.static(“public”));
app.use("/public",express.static("public"))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
    defaultlayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controllers')
app.use('/', routes);

var port = 3050;
app.listen(port);

//***Users/peterlim/Desktop/Trilogy/burger/controllers/burgers_controllers.js