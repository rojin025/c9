// var app = require("express")();
var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.get("/posts", function(req, res){
    var posts = [
            {title: "Post 1", author: "Susy"},
            {title: "Post 2", author: "Sus"},
            {title: "Post 3", author: "Su"}
        ];
        
    res.render("posts", {posts: posts});
})

app.get("/fall/:thing", function(req, res){
    var thing = req.params.thing;
    // res.send("You feel in love with " + thing);
    res.render("love", {thingVar: thing});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!");
})