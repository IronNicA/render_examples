const express = require ('express');
const res = require('express/lib/response');
const app = express();
const router = express.Router();

router.get( '/home', (reg,res) => {
    res.send('Hello World, this is home router');
});
router.get( '/profile', (reg,res) => {
    res.send('Hello World, this is profile router');
});
router.get( '/login', (reg,res) => {
    res.send('Hello World, this is login router');
});
router.get( '/logout', (reg,res) => {
    res.send('Hello World, this is logout router');
});

app.use('/',router);

app.listen(process.env.port || 3000);

console.log('Web server is listening at port' + (process.env.port || 3000));