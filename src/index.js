const express = require('express')
const app = express()
const usersHandlers = require('./controller/usersControllers');
const tasksHandlers = require('./controller/tasksControllers');

const { PORT } = require('./util/appConfig');




app.listen(PORT) //* TA CORRETO?

app.get('/tarefas', tasksHandlers)
app.get('/usuarios', usersHandlers) 



//**DUVIDAS SOBRE PORTA

//*** const port = process.env.PORT || 3000;
//ou
//* app.listen(PORT,()=>{
//*     console.log(`${APP_NAME} listening at http://localhost:${PORT}`);
//* })