var person = (function() {
    var age = 25;
    return {
        name: "Nicholas",
        getAge: function() {
            return age;
        },
        growOlder: function() {
            age++;
        }
    };
})();
console.log(person.name);
console.log(person.getAge());
person.age = 100;
console.log(person.getAge());
person.growOlder();
console.log(person.getAge());