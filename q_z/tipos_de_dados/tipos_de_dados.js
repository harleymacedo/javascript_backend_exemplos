//5 tipos de dados
//Boolean, Number, String, Null, Undefined

//String
var name = "Nicolas";
var selection = "a";

//Number
var count = 25;
var cost = 1.51;

//Boolean
var found = true;

//Null
var object = null;

var flag = undefined;
var ref; //undefined é atribuído automaticamente



var color1 = "red";
var color2 = color1;

color1 = "blue";

console.log(color1);
console.log(color2);

//operador typeof
console.log(typeof "Nicolas");
console.log(typeof null);

//métodos primitivos
var name = "Nicolas";
var middleName = name.substring(0, 3);
console.log(middleName);