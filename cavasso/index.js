const express = require('express')          
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.render('home')
})

app.get('/grv', (request, response) => {
    response.render('grv')
})

app.get('/tur', (request, response) => {
    response.render('tur')
})

// https 443
// http 80
app.listen(443, (err) => {
    if(err){
        console.log('Não foi possivel inciar o servidor!')
    }else{
        console.log('Servidor rodando...')
    }
})