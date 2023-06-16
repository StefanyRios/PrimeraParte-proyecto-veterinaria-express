var express = require('express');
var router = express.Router();
const { connection } = require('../database/conexion.js')

router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM medicos', (error, results) => {
        if (error) {
            console.log("Error en la consulta", error)
            res.status(500).send("Error en la consulta")
        } else {
            res.render('medicos', { title: 'medicos', medicos: results })
        }
    });
});

router.get('/agregar-medico', function (req, res, next) {
    res.sendFile('registro-medicos.html', { root: 'public' })
});

module.exports = router;