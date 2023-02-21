const express = require('express');
const app = express();
const router = express.Router();

router.use ((reg,res,next) => {
    console.log('Time: ', Date.now());
    next();
});

router.get( '/home', (reg,res) => {
    res.send('ok');
});

app.use('/',router);

app.listen(process.env.port || 3001);

console.log('Web server is listening at port' + (process.env.port || 3001));