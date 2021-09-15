// Promises com parâmetros

function enviarEmail(corpo,para){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var deuErro = false;
            if(!deuErro){

                resolve({time: 4 , to: "theodoro@udemy.js"}); // Promessa OK!
            }else{
                reject(" ME DESCULPE!"); // Desculpe, promessa não cumprida!
            }
        },2000)
    })
}                // Outra forma de aplicar: (dados) 
enviarEmail("Olá", "Joao@udemy.com").then(({time, to})=>{
            // Ao inves de ${time}... ${dados.time}...
    console.log(`
       time: ${time}
       ----------------------
       to: ${to}
   `)
}).catch((erro)=>{
    console.log("PROMESSA NÃO FOI CUMPRIDA," + erro);
});

/*
Quando uma promise for rejeitada, deve ser tradada e nesse
caso acima tratamos com ".catch..."
*/ 