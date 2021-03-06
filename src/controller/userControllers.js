
//* Classe sobre usuario, arquivo com a responsabilidade de controle sobre a rota usuários

const UserModel = require("../models/userModel");
const { userDB } = require("../infra/bd");

class UserController {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  show = (req, res) => {
    const name = req.params.name;

    this.dbConn.forEach((user) => {
      if (user.name === name) {
        res.send(user);
      }
    });
  };

  index = (req, res) => {
    res.send(this.dbConn);
  };

  save = (req, res) => {
    const { name, email, password } = req.body;

    const user = new UserModel(name, email, password);
    this.dbConn.push(user);

    res.send(
      `Rota POST de Usuário ativada: usuário ${body.nome} de email ${body.email} adicionado ao banco de dados`
    );
  };

  update = (req, res) => {
    const name = req.params.name;
    const content = req.body;

    for (let i = 0; i < this.dbConn.length; i++) {
      if ((this.dbConn[i].name = name)) {
        this.dbConn[i] = content;
      }
    }

    res.send(`task: ${name} modificado com sucesso`);
  };

  remove = (req, res) => {
    const name = req.params.name;

    this.dbConn = this.dbConn.filter((u) => {
      return u.name !== name;
    });

    res.send(`${name} apagado com sucesso`);
  };
}

module.exports = new UserController(userDB);