/**
 * @version 1.0.0
 * @author Daniel Herrera <daniel.herrera@newinntech.com>
 * @empresa New Inntech S.A.S <gerencia@newinnech.com>
 * @email santiago.gonzalez@netwconsulting.com
 * @copyright 2022 New Inntech S.A.S Todos los derechos reservados.
 */
/**
 * @controller hello.service
 * @description Funciones ejemplo
 */
const mysql = require('mysql2/promise')
const connection = require('../config/db')
const axios = require('axios')
const API = 'https://randomuser.me/api'

const saludo = async body => {
  let response = await axios.get(`${API}`)
  return response.data.results
}

async function insertar (body) {
  try {
    if (Object.keys(body).length === 0) {
      return {
        message: 'Cuerpo del formulario inválido',
        status: 400
      }
    }

    let sql_query = `INSERT INTO companneros (nombre, edad, tel) VALUES (?,?,?)`
    let query = mysql.format(sql_query, [body.nombre, body.edad, body.tel])
    await connection.query(query)

    return {
      message: 'Información registrada exitosamente',
      status: 201
    }
  } catch (error) {
    return {
      message: 'Algo salió mal',
      status: 500
    }
  }
}

async function listar () {
  try {
    let sql_query = `SELECT * FROM companneros`
    let query = mysql.format(sql_query)
    let [rows, fields] = await connection.query(query)

    return {
      data: rows,
      status: 200
    }
  } catch (error) {
    return {
      message: 'Algo salió mal',
      status: 500
    }
  }
}

module.exports = {
  saludo,
  insertar,
  listar
}
