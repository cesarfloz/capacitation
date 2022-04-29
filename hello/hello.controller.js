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
const helloService = require("./hello.service");

async function getSaludo(req, res, next) {
    const Result = await helloService.saludo(req.body);
    return res.json(Result);
}

async function registrarCompannero(req, res, next) {
    const result = await helloService.insertar(req.body);
    return res.status(result.status).json(result);
}

async function listarCompannero(req, res, next) {
    const result = await helloService.listar();
    return res.status(result.status).json(result);
}

module.exports = {
    getSaludo,
    registrarCompannero,
    listarCompannero
};