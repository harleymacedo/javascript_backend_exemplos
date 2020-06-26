//Exemplo forEach
let array1 = [10, 20, 30, 40, 50]
let soma = 0
array1.forEach( (valor) => {
    soma = soma + valor
})
console.log('soma: ' + soma)

//Exemplo map
let array2 = [10, 20, 30]
let novoArray2 = array2.map( (valor) => {
    return valor * 2
})
console.log('Map: ', novoArray2)