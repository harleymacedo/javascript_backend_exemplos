console.log();
console.log("Verificando se um objeto é protótipo de outro");
var object = {};
var prototype = Object.getPrototypeOf(object);
console.log(prototype === Object.prototype);
console.log(object.toString(this));