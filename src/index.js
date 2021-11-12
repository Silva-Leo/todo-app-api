const express = require('express')

const app = express()
const UserControllers = require('./controller/userControllers/userControllers');
const TaskControllers = require('./controller/taskControllers/taskControllers');

const { PORT } = require('./util/appConfig');

const user = new UserControllers();
const task = new TaskControllers();



app.listen(PORT) 

app.get('/tarefas', task.show)
app.get('/usuarios', user.show) 


