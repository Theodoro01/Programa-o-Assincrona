// TRATAMENTOS DE ERROS EM CALLBACKS

function enviarEmail(corpo, para, callback){
    setTimeout(() =>{ //setTimeout - esperar um tempo pra executar a função!
       
    // .... Logica
    var deuErro = false;
    
        if(deuErro){
             callback(5,"O envio de e-mail falhou!");
        }else{
            callback(5);
        }
     },5000)// 5 segundos.
}

console.log("Inicio do Envio de Email!");

enviarEmail("Oi, seja bem vindo ao Guia", "João@udemy.com", (time, erro)=>{
    if(erro == undefined){
        console.log("TUDO OK");//OK
        console.log(`Tempo: ${time}s`);
    }else{//Deu erro
        console.log("Opa, ocorreu um erro: " + erro);
    } 
});
