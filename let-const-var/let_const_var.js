{
    var x = 2; 
}
console.log(x)
// x pode ser usado aqui

{
    let y = 2;
}
console.log(x)
// y não pode ser usado aqui (erro)

var z = 10
{
    const z = 5
    console.log(z)
}
console.log(z)
// 10 será impresso