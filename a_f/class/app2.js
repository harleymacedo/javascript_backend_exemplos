class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
            return
        }
        this.ligado = true
    }

    desligar() {
        if (! this.ligado) {
            console.log(this.nome + ' já desligado')
            return
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico { }

const d1 = new DispositivoEletronico('Smartphone')
console.log(d1)

const s1 = new Smartphone('iPhone 8')
s1.ligar()
console.log(s1)
