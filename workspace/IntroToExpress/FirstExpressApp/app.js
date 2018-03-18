var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
})


// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});

// // "/r/subredditName" => "Goodbye!"
// app.get("/r/:subredditName", function(req, res){
//     console.log(req.params);
//     res.send("Wellcome To a Subreddit!");
// });

// "/r/subredditName" => "Goodbye!"
app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Wellcome To The " + subreddit.toUpperCase() + "SUBREDDIT!");
});

// // "/r/subredditName/comments/:id/:title/" => "Goodbye!"
// app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
//     console.log(req.params);
//     res.send("Wellcome To a Comments Page!");
// });

// "/r/subredditName/comments/:id/:title/" => "Goodbye!"
app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("Wellcome To a Comments Page!");
});

// "/dog" => "Meow!"
app.get("/dog", function(req, res){
   res.send("MEOW!");
   console.log("some made a request to DOG!!");
});

app.get("*", function(req, res){
    res.send("You are a star.");
});

// Tell Express to listen for requests (start server)

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Server has started!!");
});