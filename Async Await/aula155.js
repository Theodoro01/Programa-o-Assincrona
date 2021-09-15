// NA AULA 156 APRENDEMOS A CONVERTER ESSE SEGUNDO CODIGO BAGUNÇADO PARA 
// ESSE PRIMEIRO ORGANIZADO. 

async function principal(){
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id);
    enviarEmail("Ola, como voce vai ", email).then(()=>{
        console.log("Email Enviado!");
    }).catch((erro) => {
         console.log(erro)
    })
 }
 principal()
 
 
 // pegarId().then((id)=>{
 //     buscarEmailNoBanco().then((email)=>{
 //         enviarEmail("Olá, como vai?", email).then(()=>{
 //             console.log("Email enviado!!")
 //         }).catch(erro => {
 //             console.log(erro)
 //         })
 //     })
 // });
 