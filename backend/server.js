const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const {sequelize} = require('./models')

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

require('./routes')(app);

// If you want Sequelize to automatically create the table (or modify it as needed) according to your model definition, you can use the sync method
console.log('Syncronyzing ...');
sequelize.sync({
    force: config.db.sqlite.forceSync // Set force : false When force is true it's mean you are allowing sequelize to drop existing tables and create new ones
  })
  .then(() => {
    console.log('Database & tables created!')
    app.listen(config.port);
    console.log('Express server up and listening on ' + config.port +'...');
  })
