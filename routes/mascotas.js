var express = require('express');
var router = express.Router();
const { connection } = require('../database/conexion.js')

router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM mascotas', (error, results) => {
        if (error) {
            console.log("Error en la consulta", error)
            res.status(500).send("Error en la consulta")
        } else {
            res.render('mascotas', { title: 'mascotas', mascotas: results })
        }
    });
});

router.get('/agregar-mascota', function (req, res, next) {
    res.sendFile('registro-mascotas.html', { root: 'public' })
});

module.exports = router;