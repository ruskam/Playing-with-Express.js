/**
Rustam Kamberov
*/

// import Express as a module
// requre is a Node function for importing a module
var express = require('express');
var fortune = require('./lib/fortune.js');

var app = express();

// set up handlebars veiw engine
var handlebars = require('express-handlebars')
    .create({
        defaultLayout: 'main'
    });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'))
/*
var fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];
*/

// Add route for an index page
app.get('/', function(req, res) {
    res.render('home');
});

// Add a route for About apge
app.get('/about', function(req, res) {

    /*
    var randomFortune =
        fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)]

    res.render('about', {
        fortuneCookies: randomFortune
    });
    */

    res.render('about', 
        { 
            fortune: fortune.getFortune()
        }
    );
});

// custom 404 page
app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctlr-C to terminate');
});
