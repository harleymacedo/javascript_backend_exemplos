function calculator(input) {
    var doubleThat = 2 * (yield / 2)
    var another = yield(doubleThat)
    return (input * doubleThat * another)
}

const calc = calculator(10)
console.log(calc)

calc.next()