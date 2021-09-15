//Async/Await


function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("theodoro@gmail.com")
        },2000);
    })
}


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
}                                         
enviarEmail("Olá", "Joao@udemy.com").then(({time, to})=>{
   console.log(`
       time: ${time}
       ----------------------
       to: ${to}
   `)
}).catch((erro)=>{
     console.log("PROMESSA NÃO FOI CUMPRIDA," + erro);
});

/////
//Async/Await
function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Victor", age: 30},
                {name: "João", age: 35},
                {name: "Arthur", age: 50}
            ])
        },3000)
    })
}

async function principal(){
    var usuarios = await pegarUsuarios();
    console.log(usuarios)
    console.log("Ola!")
}

principal()
/////





//Sempre bom evitar de colocar muitas promises dentro da outra.
//Esta promise continua assincrona 
// pegarId().then((id)=>{
//     buscarEmailNoBanco().then((email)=>{
//         enviarEmail("Olá, como vai?", email).then(()=>{
//             console.log("Email enviado!!")
//         }).catch(erro => {
//             console.log(erro)
//         })
//     })
// });
