const express = require('express')          
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

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
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if(err){
        console.log('Não foi possivel inciar o servidor!')
    }else{
        console.log(port, ': Servidor rodando...')
    }
})