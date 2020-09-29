function add(num1, num2) {
    return num1 + num2;
}

var add2 = function(num1, num2) {
    return num1 + num2;
};

let boasVindas = () => {
    console.log("Boas vindos alunos de Sistemas")
}

function reflect(value) {
    return value;
}
console.log(reflect("Hi!"));
boasVindas()
console.log(add2(2, 10))

var person = {
    name: "Nicolas",
    sayName: function () {
        console.log(person.name);
    }
}
person.sayName();