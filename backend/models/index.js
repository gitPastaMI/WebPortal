const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config');
const db = {}

console.log('Setting up Sequelize ...');
const sequelize = new Sequelize(
  config.db.sqlite.name,
  config.db.sqlite.name,
  config.db.sqlite.pass,
  {
    host: config.db.sqlite.host,
    dialect: config.db.sqlite.dialect,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
