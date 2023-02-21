var express = require('express');
var app = express();
var router = express.Router();


router.get ('/',function(reg,res){
    throw new Error();
    res.send("HelloWorld");
});

app.use('/',router);

app.use(function(err,reg,res,next) {
    console.log(err.stack);
    res.status(500).send({"Error" : err.stack});
});

app.listen(3001)