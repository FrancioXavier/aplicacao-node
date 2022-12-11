const Sequelize = require("sequelize");
const sequelize = new Sequelize('seubancodedados', 'root', 'suasenha', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Banco de dados conectado!');
}).catch(function(error){
    console.log(`Erro ao se conectar ao banco de dados: ${error}`);
})