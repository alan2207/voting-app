var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var router = require('./router');
const {db, port} = require('./config');


var app = express();

mongoose.connect(db, {
    useMongoClient: true
});


// setting the app
app.use(morgan('combined'));
app.use(cors());
app.enable('trust proxy');
app.use(bodyParser.json({type: '*/*'}));
router(app);

// starting the server
app.listen(process.env.PORT || port, function() {
    console.log('The server is running...');
})
