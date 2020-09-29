//Dinamic properties

var object1 = new Object();
var object2 = object1;

object1.myNewProperty = "Awesome";
console.log(object2.myNewProperty);

var book = {
    name: "Principios de orientacao a objetos com Javascript",
    year: 2018
};

//imprimindo tipos de instancias
var array = [];
var object = {};
console.log(array instanceof Array);
console.log(object instanceof Object);
console.log(Array.isArray(array));