function rand(min=1000, max=5000) {
    return Math.floor(Math.random() * (max - min) + min)
}

function mensagemJa(mensagem, tempo) {
    setTimeout( function () {
        console.log(mensagem)
    }, tempo )
}

mensagemJa('Mensagem 1', rand())
mensagemJa('Mensagem 2', rand())
mensagemJa('Mensagem 3', rand())

console.log('Outra mensagem')