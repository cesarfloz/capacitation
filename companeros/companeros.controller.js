/**
 * @version 1.0.0
 * @author Daniel Herrera <daniel.herrera@newinntech.com>
 * @empresa New Inntech S.A.S <gerencia@newinnech.com>
 * @email santiago.gonzalez@netwconsulting.com
 * @copyright 2022 New Inntech S.A.S Todos los derechos reservados.
 */
/**
 * @controller hello.controller
 * @description Funciones ejemplo controlador
 */
const companeros = require('./companeros.service')

async function registrarCompannero (req, res, next) {
  const result = await companeros.insertar(req.body)
  return res.status(result.status).json(result)
}

async function listarCompannero (req, res, next) {
  const result = await companeros.listar()
  return res.status(result.status).json(result)
}

async function eliminarCompannero (req, res, next) {
  const result = await companeros.eliminar(req.query.id)
  return res.status(result.status).json(result)
}

async function actualizarCompannero (req, res, next) {
  const result = await companeros.actualizar(req.body)
  return res.status(result.status).json(result)
}

module.exports = {
  registrarCompannero,
  listarCompannero,
  eliminarCompannero,
  actualizarCompannero
}
