// import npm modules
var 
    express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan');

var app = express();
var PORT = process.env.PORT || 3000;


// start logger and make public files available
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// Start Mongoose & test connection
var ObjectId = require('mongoose').Types.ObjectId;
var databaseUri = 'mongodb://localhost/nytreact';
var db = mongoose.connection;

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} 
else {
    mongoose.connect(databaseUri);
}

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});


// Express Routes
app.get('/', function(req, res){
    res.render('./public/index.html')
});

app.get('/api/saved', function(req, res){
    // look in MongoDB
});

app.post('/api/saved', function(req, res){
    // save to MongoDB
});

app.delete('/api/saved', function(req, res){
    // delete from MongoDB
});

app.listen(PORT, function() {
    console.log('Server now listening on port ' + PORT);
});