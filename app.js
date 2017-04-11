require('./config/dataSource');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
//app.use(bodyParser());
//require('./config/route')(app);


router.use(function (req, res, next) {

res.sendFile(__dirname+'/views/index.html');
    //console.log('hiiii');
    next();
});
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();

});
function errorHandler(err, req, res, next) {
 next(err);
};
app.use('/user', router);
app.use(errorHandler);
app.use('/user',express.static('views'));
/*
router.use('/user/:id', function (req, res, next) {
    res.send('Request Type:', req.method);
    next();
});
*/

app.listen(3000,function () {
    console.log('Listening to server @http://localhost:3000');
});

