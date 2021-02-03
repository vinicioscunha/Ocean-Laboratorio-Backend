const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/mensagens', function (req, res) {
  res.send('Exibir todas as mensagens.')
})

app.get('/erros', function (req, res) {
  res.send('Exibir todos os erros')
})

app.get('/salvar', function(req, res) {
  res.send('Links para salvar.')
})
 
app.listen(3000)