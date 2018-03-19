var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.set("/",function(req, res){
    res.render("Home");
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});