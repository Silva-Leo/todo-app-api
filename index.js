const express = require('express')

const app = express()


app.get('/usuarios', function (req, res) {
  res.send(`Rota ativada com GET e recurso usuario: valores de usuarios devem ser retornados`)
})

app.get('/tarefas', function (req, res) {
  res.send(`Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados`)
})


app.listen(3000)