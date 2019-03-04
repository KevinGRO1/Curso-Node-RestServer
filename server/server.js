require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('get usuario')
});

//Peticiones POST utilizado par crear nuevos registros
app.post('/usuario', function(req, res) {

    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body,
        });
    }
});

//Peticiones PUT utilizado para actualizar data
//En este caso se le envia el id por medio de la URl
app.put('/usuario/:id', function(req, res) {

    //Por medio de req.params.id --> recuperamos el id enviado
    let id = req.params.id;
    res.json({
        id
    })
});

//

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', process.env.PORT);
})