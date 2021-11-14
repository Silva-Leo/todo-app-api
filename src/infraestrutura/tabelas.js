class Tabelas{
    init(conexao){
        this.conexao = conexao;
        
        this.criarAtendimentos();
    }

    criarAtendimentos(){

        const table_usuarios = `
        CREATE TABLE IF NOT EXISTS "USUARIOS" (
            "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
            "NOME" varchar(64),
            "EMAIL" varchar(64),
            "SENHA" varchar(64)
          );`;
        
        
          const table_tarefas = `
        CREATE TABLE IF NOT EXISTS TAREFAS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT, 
            TITULO VARCHAR(64),
            DESCRICAO TEXT,
            STATUS VARCHAR(32),
            DATACRIACAO VARCHAR(32),
            ID_USUARIO INTEGER,
            FOREIGN KEY(ID_USUARIO) REFERENCES USUARIOD(ID)
        );`;

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

