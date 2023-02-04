const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname+"/HTML/index.html"))
app.get('/sobre', (req, res) => res.sendFile(__dirname+"/HTML/sobre.html"))
app.get('/blog', (req, res) => res.send('Blog!'))
app.get('/contacto', (req, res) => res.send('Contacto!'))


app.listen(port, () => 
console.log(`Example app listening on port ${port}!`)
)

/*rotas dinamicas  e parametro*/
app.get('/ola/:nome/:carg',(req,res)=>res.send('<h1>Olá '+req.params.nome+'</h1>'+ '<h1>Cargo:'+req.params.carg+'</h1>'))