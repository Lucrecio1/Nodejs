
const hbs = require()
const app = require('express');
const { ExpressHandlebars } = require('express-handlebars');
const { createRequire } = require('module')
const port = 3000

app.engine('handlebars', hbs({defaultLayout: 'main'}))

  app.engine('handlebars',initViews())
 // conexão
 const { Model } = require('sequelize');
const Sequelize =  require('sequelize');
const sequelize  = new Sequelize('test','root','', {
host: "localhost",
dialect:'mysql'
});
// rota
app.get('/cad', function(req,res){
    res.render('formulario')
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))