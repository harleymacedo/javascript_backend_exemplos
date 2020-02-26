var person1 = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};

var person2 = Object.create(person1, {
    name: {
        configurable: true,
        enumerable: true,
        value: "Greg",
        writable: true
    }
});

person1.sayName();
person2.sayName();
console.log(person1.hasOwnProperty("sayName"));
console.log(person1.isPrototypeOf(person2));
console.log(person2.hasOwnProperty("sayName"));