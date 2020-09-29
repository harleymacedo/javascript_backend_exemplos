function rand(min=1000, max=3000) {
    return Math.floor(Math.random() * (max - min) + min)
}

function mensagemJa(mensagem, tempo, callback) {
    setTimeout( () => {
        console.log(mensagem)
        if (callback) callback()
    }, tempo )
    
}

mensagemJa('Mensagem 1', rand(), function(){
    mensagemJa('Mensagem 2', rand(), function() {
        mensagemJa('Mensagem 3', rand())
    })
})

