module.exports = {
  port: process.env.PORT || 8181,
  bcrypt: {
    rounds: 13
  },
  jwt: {
    secret: 'jwt portal secret',
    expires: 60 * 60 * 8 // 8 ore
  },
  db: {
    sqlite: {
      name: process.env.DBNAME || 'portal',
      user: process.env.DBUSER || 'portaladim',
      pass: process.env.DBPASS || 'portaladmin',
      host: process.env.DBHOST || 'localhost',
      storage: process.env.DBSTOR || './portal.sqlite',
      dialect: 'sqlite',
      forceSync: true
    }
  }
}
