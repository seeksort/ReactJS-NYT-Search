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
var ObjectId = require('mongoose').Types.ObjectId,
    databaseUri = 'mongodb://localhost/nytreact',
    db = mongoose.connection,
    Article = require('./models/Article.js');

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


// Initial Routes
app.get('/search', function(req, res){
    res.render('./public/index.html')
});

app.get('/', function(req, res){
    res.redirect('/search')
});

// Get Saved articles
app.get('/api/saved', function(req, res){
    Article.find({}, function(err, docs) {
        if (err) {
            console.log(err);
        } 
        else {
            res.json(docs);
        }
    });
});

// Save an article
app.post('/api/saved', function(req, res){
    Article.save(function(err, req) {
        if (err) {
            console.log(err);
        } 
        else {
            res.sendStatus(200);
            res.send('Article saved to database.');
        }
    });
});

// Delete a saved article
app.delete('/api/saved', function(req, res){
    Article.remove({ '_id': req.params.articleid }, function(err) {
        if (err) {
            console.log(err);
        }
    })
});

app.listen(PORT, function() {
    console.log('Server now listening on port ' + PORT);
});