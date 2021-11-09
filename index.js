const express = require('express')
const app = express()


app.get('/usuario', function (req, res) {
  res.send(`Rota ativada com GET e recurso usuario: valores de usuarios devem ser retornados`)
})

app.get('/tarefa', function (req, res) {
  res.send(`Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados`)
})


app.listen(3000)