// Parametros em Callbacks

function enviarEmail(corpo, para, callback){
    setTimeout(() =>{ //setTimeout - esperar um tempo pra executar a função!
        console.log(`
        Para: ${para}
        --------------------------
        ${corpo}
        --------------------------
        De: João Henrique
        `)
        callback("OK",2,"5s","Theodoro"); // Parametros em Callbacks
    },5000)// 5 segundos.
}
console.log("Inicio do Envio de Email!");
enviarEmail("Oi, seja bem vindo ao Guia", "João@udemy.com",(status, amount, time, nome) =>{ // Parametros em Callbacks
    console.log(`
        
        Status: ${status}
        ---------------------------
        Contatos: ${amount}
        ---------------------------
        Tempo de envio: ${time}
        ---------------------------
        De: ${nome}
    `);
    console.log("TUDO OK");
});
