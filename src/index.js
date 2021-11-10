const express = require('express')
const app = express()
const UsersControllers = require('./controller/usersControllers');
const TasksControllers = require('./controller/tasksControllers');

const { PORT } = require('./util/appConfig');

const users = new UsersControllers();
const tasks = new TasksControllers();



app.listen(PORT) 

app.get('/tarefas', tasks.show)
app.get('/usuarios', users.show) 



//**DUVIDAS SOBRE PORTA

//*** const port = process.env.PORT || 3000;

//ou

//* app.listen(PORT,()=>{
//*     console.log(`${APP_NAME} listening at http://localhost:${PORT}`);
//* })