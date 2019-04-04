module.exports = {
  port: process.env.PORT || 8181,
  db: {
    sqlite: {
      name: process.env.DBNAME || 'portal',
      user: process.env.DBUSER || 'portaladim',
      pass: process.env.DBPASS || 'portaladmin',
      host: process.env.DBHOST || 'localhost',
      storage: process.env.DBSTOR || './portal.sqlite',
      dialect: 'sqlite',
      forceSync: false
    }
  }
}
