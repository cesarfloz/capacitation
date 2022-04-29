const { DataTypes } = require('sequelize')

module.exports = model
function model (sequelize) {
  const attributes = {
    nombre: { type: DataTypes.STRING, allowNull: false },
    edad: { type: DataTypes.STRING, allowNull: false },
    tel: { type: DataTypes.STRING, allowNull: false }
  }

  const options = {
    // Desabilitar timestampo por defecto
    timestamps: false
  }
  return sequelize.define('companeros', attributes, options)
}
module.exports = model
