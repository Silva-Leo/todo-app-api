const express = require('express')
const app = express()
const usersHandlers = require('./controller/usersControllers');
const tasksHandlers = require('./controller/tasksControllers');
// const port = process.env.PORT || 3000;





app.listen(3000)

app.get('/tarefas', tasksHandlers)
app.get('/usuarios', usersHandlers) 