const express = require("express");   //* requirindo o framework express
const conexaoDB = require("./infraestrutura/conexaoDB") //* requirindo a conexão com o DB

const UserController = require("./controller/userControllers");  //* importando a Class userController

const TaskController = require("./controller/taskControllers");   //* importando a Class taskController

const conexao = require('./infraestrutura/conexaoDB') //* importando conexão com o DB

const tabelas = require('./infraestrutura/tabelas') //* importando Class de tabelas

const app = express(); //* app express para poder executá-lo
const { PORT, APP_NAME } = require("./util/appConfig"); //* importando as configurações do app

//*instanciando as Classes 

const user = new UserController();
const task = new TaskController();

conexaoDB.connect()      //* conexão com o DB 
app.use(express.json()) //* fazendo parse nos dados para JSON

app.get("/", (req, res) => {
  res.send(APP_NAME);
});

//* método e rota usuarios

app.get("/usuarios", user.show);
app.post("/usuarios", user.save);

//*método e rota tarefas

app.get("/tarefas", task.show);
app.post("/tarefas", task.save);

//* porta utilizada

app.listen(PORT)
