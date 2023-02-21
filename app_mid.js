const express = require('express');
const app = express();

app.use ((reg,res,next) => {
    console.log('Time: ', Date.now());
});

app.listen(process.env.port || 3000);
console.log('Web server is listening at port' + (process.env.port || 3000));