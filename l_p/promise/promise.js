function esperaAi(msg, tempo) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (tempo >= 1000){
                resolve(msg)
            } else {
                reject('Tempo menor que 1000')
            }
        }, tempo )
    } )
}

esperaAi('Frase 1', 1500)
.then( (resposta) => {
    console.log(resposta)
    return esperaAi('Frase 2', 2000)
} )
.then( (resposta) => {
    console.log(resposta)
    return esperaAi('Frase 3', 2500)
} )
.then ( (resposta) => {
    console.log(resposta)
} )
.catch ( (error) => {
    console.log(error)
} )

