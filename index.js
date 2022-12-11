const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/static/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/static/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Olha outra URL ai");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send(`Seu nome eh: ${req.params['nome']} <br> 
              Seu cargo é ${req.params.cargo}`);

});



app.listen(5503, function(){
    console.log("Servidor rodando na URL https://localhost:5503");
}); 