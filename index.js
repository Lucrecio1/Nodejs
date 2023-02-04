
const app = require('express');
const port = 3000;

//config 
 // templet
 // conexão
 
const Sequelize =  require('sequelize');
const sequelize  = new Sequelize('test','root','', {
host: "localhost",
dialect:'mysql'
});
// rota
app.get('/cad', function(req,res){
    res.send('Rota de cadastro de')
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))