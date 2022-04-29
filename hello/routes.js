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
const express = require("express");
const router = express.Router();
const helloController = require("../hello/hello.controller");
// Rutas
router.post("/hello", helloController.getSaludo)
    .post("/registrar", helloController.registrarCompannero)
    .get("/listar", helloController.listarCompannero);
module.exports = router;