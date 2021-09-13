// CALLBACKS

function enviarEmail(corpo, para, callback){
    setTimeout(() =>{ //setTimeout - esperar um tempo pra executar a função!
        console.log(`
        Para: ${para}
        --------------------------
        ${corpo}
        --------------------------
        De: João Henrique
        `)
        callback(); 
    },5000)// 5 segundos.
}
console.log("Inicio do Envio de Email!");
enviarEmail("Oi, seja bem vindo ao Guia, João@udemy.com",() =>{
    console.log("Seu email foi enviado!");
    console.log("TUDO OK");
});
console.log("Seu email foi enviado!");
console.log("TUDO OK");