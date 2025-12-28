const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("middlware");
    next();
});
app.use(function(req,res,next){
    console.log("middlware");
    next();
});
app.use(function(req,res,next){
    console.log("middlware");
    next();
});

app.get('/',function (req,res) {
    res.send("Hello World");
})
app.get('/profile',function (req,res,next) {
    return next(new Error("Nahi ho paaya"));
}) 

app.use(function(errm , req , res , next){
    console.error(errm.stack);
    res.status(500).send("Somehing broke");
})
app.listen(3000);