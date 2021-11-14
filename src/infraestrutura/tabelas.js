class Tabelas{
    init(conexao){
        this.conexao = conexao;
        
        this.criarTable();
    }

    criarTable(){

        const table_usuarios = `
        CREATE TABLE IF NOT EXISTS USUARIOS (ID INT PRIMARY KEY AUTO_INCREMENT,NOME varchar(50),EMAIL varchar(50),SENHA varchar(50));`;
        
        
          const table_tarefas = `
        CREATE TABLE IF NOT EXISTS TAREFAS (ID_TAREFA INT PRIMARY KEY AUTO_INCREMENT,NOME_TAREFA VARCHAR(50),DESCRICAO TEXT,STATUS VARCHAR(30),PRAZO DATE,ID_USUARIO INTEGER,FOREIGN KEY(ID_USUARIO) REFERENCES USUARIOS(ID));`;

        this.conexao.query(table_usuarios, erro =>{
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela usuarios criada com sucesso')
            }
        })

        this.conexao.query(table_tarefas, erro =>{
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela tarefas criada com sucesso')
            }
        }) 
    }
}

module.exports = new Tabelas;

