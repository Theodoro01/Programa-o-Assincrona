function enviarEmail(corpo,para){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var deuErro = true;
            console.log("TUDO OK!!")
            if(!deuErro){
                resolve(); // Promessa OK!
            }else{
                reject(); // Desculpe, promessa não cumprida!
            }
        },2000)
    })
}
enviarEmail("Olá", "Joao@udemy.com").then(()=>{
    console.log("PROMESSA OK!!!")
}).catch(()=>{
    console.log("PROMESSA NAO FOI CUMPRIDA");
});

/*
Quando uma promise for rejeitada, deve ser tradada e nesse
caso acima tratamos com ".catch..."
*/ 