const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require('./models/Post');

//CONFIG
    //Template engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

//ROTAS

    app.get('/', function(req, res){
        res.render('home');
        
    })

    app.get('/cadastro', function(req, res){
        res.render('form'); //renderiza um template handlebars
    });

    app.post('/poscad', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/');
        }).catch(function(erro){
            res.send(`Erro ao criar postagem: ${erro}`);
        })
    }); //só pode ser acessada através da chamada do method: POOST



app.listen(5503, function(){
    console.log("Servidor rodando na URL http://localhost:5503");
}); 