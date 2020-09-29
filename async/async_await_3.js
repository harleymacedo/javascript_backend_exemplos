function rand(min=0, max=3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise( (resolve, reject) => { 
        setTimeout(() => { resolve(msg) }, tempo)
     } )
} 

async function executa() {
    try{
        const fase1 = await esperaAi('Fase 1', rand())
        const fase2 = await esperaAi('Fase 2', rand())
        const fase3 = await esperaAi('Fase 3', rand())
    } catch(e) {
        console.log('Erro: ' + e)
    }
}

executa()