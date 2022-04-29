/**
 * @version 1.0.0
 * @author Daniel Herrera <daniel.herrera@newinntech.com>
 * @empresa New Inntech S.A.S <gerencia@newinnech.com>
 * @email santiago.gonzalez@netwconsulting.com
 * @copyright 2022 New Inntech S.A.S Todos los derechos reservados.
 */
/**
 * @controller routes
 * @description rutas del servcio
 */
const express = require('express')
const router = express.Router()
const companerosController = require('./companeros.controller')
// Rutas
router
  .post('/registrar', companerosController.registrarCompannero)
  .put('/actualizar', companerosController.actualizarCompannero)
  .get('/listar', companerosController.listarCompannero)
  .delete('/eliminar', companerosController.eliminarCompannero)
module.exports = router
