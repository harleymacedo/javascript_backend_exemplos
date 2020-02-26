let contador = 1
let boasVindas = function () {
    console.log('Boas vindas alunos do IFCE n: ' + contador)
    contador++
    setTimeout(boasVindas, 1000)
}
setTimeout(boasVindas, 2000)