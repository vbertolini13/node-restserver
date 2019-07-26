/**
 * 
 */
require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/usuarios', function(req, res) {
    res.json('get Usuario');
})

app.post('/usuarios', function(req, res) {
    let body = req.body;
    if (body === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Body undefined'
        });
    } else {
        res.json({
            body
        });
    }
})

app.put('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
})

app.delete('/usuarios', function(req, res) {
    res.json('delete Usuario');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', process.env.PORT);
});