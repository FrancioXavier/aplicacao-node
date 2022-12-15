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
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts});
        })
    }) //pega todos os dados de Post, ordena em ordem decrescente e chama o template home

    app.get('/cadastro', function(req, res){
        res.render('form'); //renderiza um template handlebars
    });

    app.post('/poscad', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){ //a função then é chamada quando o create funciona
            res.redirect('/');
        }).catch(function(erro){ // já o catch aciona quando o create der erro
            res.send(`Erro ao criar postagem: ${erro}`);
        })
    }); //só pode ser acessada através da chamada do method: POOST

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){ //Destrói o post onde o id é igual ao passo no parametro da url
            res.send('Postagem deletada com sucesso');
        }).catch(function(erro){
            res.send(`Erro ao deletar postagem: ${erro}`);
        })
    })

    app.get('/editar/:id', function(req, res){
        Post.findByPk(req.params.id).then(
            post => {
                res.render('update-form', {
                    id: req.params.id,
                    titulo: post.titulo,
                    conteudo: post.conteudo
                })
            }
        ).catch(erro => {
            res.send('Post não encontrado!');
        }) // Encontra um post por meio da Primary Key(id), ao achar, chama uma callback function que renderiza
    }) // o update-form e passa as informações ATUAIS sobre cada campo

    app.post('/editado/:id/', function(req, res){
        Post.update({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        },
        {
            where: {id: req.params.id}
        }).then(function(){
            res.redirect('/');
        }).catch(err => {
            res.send(`Erro ao editar formulário: ${err}`);
        });
    }) //APÓS atualizar e clicar, o action chama o app.post acima, atualiza conforme o usuário digitou no body
        // do update-form e faz o update onde o id é igual ao parametro da url, ao final, redireciona ao home


app.listen(5503, function(){
    console.log("Servidor rodando na URL http://localhost:5503");
}); 