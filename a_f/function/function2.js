/* //----------Declaração de função
var foo = function() {}
function bar() {}

//-----------Bind: como utilizar
function sith() { //Parte com erro
    console.log(this)
}
sith()
objeto1 = {nome: "nome1"}
var sith2 = function () { //Parte correta
    console.log(objeto1)
}
sith2.bind(objeto1)
sith2() */

//-----------Call: como utilizar




//-----------Map: como utilizar
var studios = ["Warner Bros", "21 Century", "Sony"]
studios.map((s) => {console.log(s.length)})

var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)
function myFunction(num) {
  return num * 10;
}
console.log(newarray)

//--Reduce
var numbers = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
  return total + Math.round(num);
}
console.log(numbers.reduce(getSum, 0))
