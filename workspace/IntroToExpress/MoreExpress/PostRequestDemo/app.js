var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    var friends = ["Tony", "Ronney","Justin", "Lily"];
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    res.send("YOU HAVE REACHED THE POST ROUTE");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});