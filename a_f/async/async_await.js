//Declarando promise
function pegarId() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(5)
        }, 1500)
    })
}

function buscarEmailNoBanco(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('harley.ip@gmail.com')
        }, 2000)
    })
}

function enviarEmail(corpo, para) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve ({time: 6, to: 'harley.ip@gmail.com'})
        }, 4000)
    })
}

//Chamando funções de forma síncrona
async function principal() {
    let id = await pegarId()
    console.log('Id: ' + id)
    let email = await buscarEmailNoBanco(id)
    console.log('Email: ' + email)
    await enviarEmail('Boa tarde, tudo bem?', email)
}

principal()