const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")

//CONFIG
    //Template engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

//ROTAS

    app.get('/cadastro', function(req, res){
        res.render('form') //renderiza um template handlebars
    })

    app.post('/poscad', function(req, res){
        let titulo = req.body.titulo; //pegando dados do formulario com o body parser
        let conteudo = req.body.conteudo;
        res.send(`Titulo: ${titulo} <br> Conteúdo: ${conteudo}`)
    })//só pode ser acessada através da chamada do method: POOST



app.listen(5503, function(){
    console.log("Servidor rodando na URL http://localhost:5503");
}); 