const Sequelize = require("sequelize");
const sequelize = new Sequelize('seubancodedados', 'root', 'suasenha', {
    host: 'localhost',
    dialect: 'mysql'
});

//MODEL DE POSTAGEM

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Usuario.sync({force: true})

// Postagem.create({
//     titulo: 'TITULO DA POSTAGEM',
//     coteudo: 'OADCNDOSAUFASUDFASDFOIASDFSAOIDF'
// })

Usuario.create({
    nome: 'Francio Xavier',
    sobrenome: 'da Silva Moreira',
    idade: 19,
    email: 'teste@email.com'
})