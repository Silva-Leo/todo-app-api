const TaskModel = require("../models/taskModel"); 
const { tasksDB } = require("../infra/bd");

class TaskController {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  show = (req, res) => {
    const title = req.params.title;

    this.dbConn.forEach((task) => {
      if (task.title === title) {
        res.send(task);
      }
    });
  };

  index = (req, res) => {
    res.send(this.dbConn);
  };

  save = (req, res) => {
    const { title, description, status } = req.body;

    const task = new TaskModel(title, description, status);
    this.dbConn.push(task);

    res.send(
      "Rota POST de Tarefas ativada: tarefas adicionado ao banco de dados"
    );
  };

  update = (req, res) => {
    const title = req.params.title;
    const content = req.body;

    for (let i = 0; i < this.dbConn.length; i++) {
      if ((this.dbConn[i].title = title)) {
        this.dbConn[i] = content;
      }
    }

    res.send(`task: ${title} modificado com sucesso`);
  };

  remove = (req, res) => {
    const title = req.params.title;

    this.dbConn = this.dbConn.filter((t) => {
      return t.title !== title;
    });

    res.send(`${title} apagado com sucesso`);
  };
}

module.exports = new TaskController(tasksDB);
