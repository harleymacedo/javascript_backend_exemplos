let resultado = 0
for (i = 1; i <= 10; i++){
    resultado = resultado + i
}
console.log(resultado)

var person = {
    fname:"John",
     lname:"Doe",
     age:25
}
var text = ""
var x;
for (x in person) {
  text += person[x]
}
console.log(text)

let multiplicacoes = 1
let j = 1
while (j <= 5){
    multiplicacoes = multiplicacoes * j
    j++
}
console.log(multiplicacoes)

let z = 1
do{
    console.log(z)
} while (z < 1)
