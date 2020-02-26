let robo = {
    nome: 'R165',
    endereco: 'Japao',
    apresentar: function(){console.log('Olá, me chamo ' + this.nome)},
    passarLocalizacao: function(){console.log('Estou no Japao')},
    dobrar: function(n){return n * 2},
}

function dizOi() {
    console.log('Oi')
}

const valor = 200

module.exports = {robo, valor, dizOi}
