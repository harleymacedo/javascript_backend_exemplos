//Sem recurso de callback
function esperaAi(msg, tempo) {
    setTimeout(() => {console.log(msg)}, tempo)
}

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

esperaAi('Mensagem 1', rand(1, 3))
esperaAi('Mensagem 2', rand(1, 3))
esperaAi('Mensagem 3', rand(1, 3))

//Com recurso de callback
function esperaAi2(msg, tempo, callback) {
    setTimeout(() => {console.log(msg)}, tempo)
    if (callback) callback()
}

function rand2(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

esperaAi('Mensagem 1', rand2(1, 3))
esperaAi('Mensagem 2', rand2(1, 3))
esperaAi('Mensagem 3', rand2(1, 3))

//Usuando promisse
function esperaAi3(msg, tempo){
    return new Promise( (resolve, reject) => { 
        setTimeout(() => { resolve(msg) }, tempo)
     } )
}   
esperaAi3('Frase 1', rand2(1, 3))
    .then( (resposta) => {
        console.log(resposta)
        return esperaAi3('Frase 2', rand2(1, 3))
    } )
    .then( (resposta) => {
        console.log(resposta)
        return esperaAi3('Frase 3', rand2(1, 3))
    } )
    .then( () => {
        console.log('Eu serei o ultimo a ser exibido')
    } )
    .catch()
