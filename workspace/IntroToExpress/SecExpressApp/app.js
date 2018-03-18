var express = require("express");
var app = express();

//"/" = "Hi there, Welcome to my assignment!"
app.get("/", function(req, res){
    res.send("Hi there, Welcome to my assignment!");
});

//animals
app.get("/speak/:animal", function(req, res){
   var sounds = {
       cow: "Moo",
       dog: "Woof Woof!!",
       pig: "Oink",
       cat: "Meow",
       }
    var animal = app.prams.animal;   
    var sound =sounds[animal];
   res.send("animal:" + animal + "sound:" + sound); 
});

// //Pig
// app.get("/speak/pig", function(req, res) {
//     res.send("The pig says 'Oink'");
// });

// //Cow
// app.get("/speak/cow", function(req, res) {
//     res.send("The cow says 'Moo'");
// });

// //Dog
// app.get("/speak/dog", function(req, res) {
//     res.send("The dog says 'Woof Woof!'");
// });

//repeat
app.get("/repeat/:str/:no", function(req, res){
    
    var str = req.params.str;
    var no = Number(req.params.no);
    var result = "";
    
    for(var i = 0; i < no ; i++){
        result += str + " ";
    };
    res.send(result);
});

//other
app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

// Tell Express to listen for the requests (start server)

app.listen(process.env.PORT, process.env.ID , function(){
    console.log("Server has started!!");
});