var person = {
    name: "Nicolas",
    sayName: function() {
        console.log(this.name);
    }
};
person.sayName();

//this trabalha com contexto
function sayNameForAll() {
    console.log(this.name);
}
var person1 = {
    name: "Nicolas",
    sayName: sayNameForAll
};
var person2 = {
    name: "Greg",
    sayName: sayNameForAll
};
person1.sayName();
person2.sayName();


//Modificando o this
console.log();
console.log("Modificando o this");
function sayNameForAll2(label) {
    console.log(label + ":" + this.name);
}
var person1 = {
    name: "Nicholas"
};
var person2 = {
    name: "Greg"
};
var name = "Michael";
sayNameForAll2.call(this, "Global");
sayNameForAll2.call(person1, "Person1");
sayNameForAll2.call(person2, "Person2");

//Verificando existência de variáveis
console.log();
console.log("Verificando existência de variáveis");
console.log("name" in person1);
console.log("title" in person1);

//Usando o método delete
console.log();
console.log("Deletendo método");
console.log("name" in person1);
delete person1.name;
console.log("name" in person1);

//Usando o método keys
console.log();
console.log("Usando o método keys");
var object1 = new Object();
var properties = Object.keys(object1);
for (i = 0, len = properties.length; i < len; i++){
    console.log("Name :" + properties[i]);
}