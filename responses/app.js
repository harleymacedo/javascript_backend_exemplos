const express = require('express')
const app = express()

//Resposta html
app.get('/html', function(req, res) { 
    res.status(200)
    res.type('html')
    res.end('<h2>Resposta em html</h2>')
})

//Resposta json
app.get('/json', function(req, res) {
    res.status(200)
    res.type('json')
    res.json({"nome": "Harley", "curso": "Sistemas de informação"})
})

app.listen(3000, function() {
    console.log('App rodando na porta 3000!')
})
