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
const db = require('../db/models/index')
require('dotenv').config()

async function insertar (body) {
  try {
    if (Object.keys(body).length === 0) {
      return {
        message: 'Cuerpo del formulario inválido',
        status: 400
      }
    }

    const campanero = new db.companeros({
      nombre: body.nombre,
      edad: body.edad,
      tel: body.tel
    })
    // Guardar marca
    await campanero.save()

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
    let companeros = await db.companeros.findAll()

    if (Object.keys(companeros).length === 0)
      return {
        data: 'No hay registros',
        status: 400
      }

    return {
      data: companeros,
      status: 200
    }
  } catch (error) {
    return {
      message: 'Algo salió mal',
      status: 500
    }
  }
}

async function eliminar (id) {
  try {
    let companeros = await db.companeros.findOne({ where: { id: id } })

    if (!companeros || Object.keys(companeros).length === 0)
      return {
        data: 'El usuario no existe',
        status: 404
      }

    await companeros.destroy()

    return {
      data: 'Datos eliminados exitosamente',
      status: 200
    }
  } catch (error) {
    console.log('error: ', error)
    return {
      message: 'Algo salió mal',
      status: 500
    }
  }
}

async function actualizar (body) {
  try {
    if (!body.id)
      return {
        data: 'Cuerpo no válido',
        status: 400
      }

    let companeros = await db.companeros.findOne({ where: { id: body.id } })

    if (!companeros || Object.keys(companeros).length === 0)
      return {
        data: 'El usuario no existe',
        status: 404
      }

    Object.assign(companeros, body)
    await companeros.save()

    return {
      data: 'Datos actualizados exitosamente',
      status: 200
    }
  } catch (error) {
    console.log('error: ', error)
    return {
      message: 'Algo salió mal',
      status: 500
    }
  }
}

module.exports = {
  insertar,
  listar,
  eliminar,
  actualizar
}
