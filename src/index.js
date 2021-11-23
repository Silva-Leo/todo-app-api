const express = require("express"); //* requirindo o framework express

const app = express(); //* app express para poder executá-lo

const { PORT, APP_NAME } = require("./utils/appConfig");  //* importando as configurações do app

const conexao = require('./infraestrutura/conexaoDB') //* importando conexão com o DB

const tabelas = require('./infraestrutura/tabelas') //* importando Class de tabelas


conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("conectado com sucesso");

    tabelas.init(conexao);
  }

})

app.use((req, res, next) => {
  console.log(req.headers.host, new Date().toLocaleTimeString());
  next();
});


app.get("/", (req, res) => {
  res.send("ToDo APP API");
});


//* porta utilizada

app.listen(PORT)
