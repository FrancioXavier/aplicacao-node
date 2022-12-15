const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//CONFIG
    //Template engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //Conexão com o banco de dados
        const Sequelize = require("sequelize");
        const sequelize = new Sequelize('sistemadecadastro', 'root', 'FdevPy-2708', {
            host: 'localhost',
            dialect: 'mysql'
        });

//ROTAS

    app.get('/cadastro', function(req, res){
        res.render('form') //renderiza um template handlebars
    })

    app.post('/poscad', function(req, res){
        res.send('CADASTRO RECEBIDO COM SUCESSO')
    })//só pode ser acessada através da chamada do method: POOST



app.listen(5503, function(){
    console.log("Servidor rodando na URL http://localhost:5503");
}); 