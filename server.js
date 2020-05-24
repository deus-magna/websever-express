const express = require('express')
const app = express()

const hbs = require('hbs')
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'))

// Express HBS engine
app.set('view engine', 'hbs');

// app.get('/', function(req, res) {

//     let salida = {
//         nombre: 'Renato',
//         edad: 27,
//         url: req.url
//     }

//     res.send(salida);

// });

hbs.registerPartials(__dirname + '/views/partials', function(err) {});

app.get('/', function(req, res) {

    res.render('home.hbs', {
        nombre: 'Super RenATo'
    });

});


app.get('/about', function(req, res) {

    res.render('about.hbs');

});

// app.get('/data', function(req, res) {

//     res.send('Hola Data');

// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});