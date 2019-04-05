const bcrypt = require('bcrypt')
const config = require('../config/config')

// grab the User model from the models folder, the sequelize
// index.js file takes care of the exporting for us and the
// syntaxt below is called destructuring, its an es6 feature
const {User} = require('../models')

module.exports = {
  register (req,res) {
      bcrypt.hash(req.body.password, config.bcrypt.rounds).then(function(hash) {
        User
          .create({username: req.body.username, password: hash})
          .then((user) => {
            return res.send({user: user})
          })
          .catch((err) => {
            return res.status(418).send({error: err});
          });
      });
  },

  login (req,res) {
    User
      .findOne({ where: {username: req.body.username} })
      .then((user) => {
        if (!user) {
          return res.status(418).send({error: 'Invalid username'});
        }
        bcrypt
          .compare(req.body.password,user.password)
          .then((result) => {
            if (result) {
              return res.send({user: user})
            }
            return res.status(418).send({error: 'Invalid password'});
          })
          .catch((err) => {
            return res.status(418).send({error: 'Invalid password'});
          });
      })
      .catch((err) => {
        return res.status(418).send({error: err});
      });
  }
}
