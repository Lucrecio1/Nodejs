

const { Model } = require('sequelize');
const Sequelize =  require('sequelize');
const sequelize  = new Sequelize('test','root','', {
host: "localhost",
dialect:'mysql'
});

//model para postagem

// 

const Postagem = sequelize.define('Postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Hoje ta quente",
    conteudo:"Vamos codar com o node"
})

const Usuario = sequelize.define('usuarios',{
    Nome:{
        type: Sequelize.STRING
    },
    Sobrenome:{
        type: Sequelize.STRING
    },
    Idade:{
        type: Sequelize.INTEGER
    }
})

Usuario.create({
    Nome:"Lucrecio",
    Sobrenome: "Barnabé",
    Idade: 24
})
//Usuario.sync({force: true})

//inserir dados 

