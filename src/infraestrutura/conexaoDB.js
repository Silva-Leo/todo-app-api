//* arquivo responsável sobre a conexão com o DB no mysql 

const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'adminadmin',
    database: 'to-do-app'

})

module.exports = conexao

