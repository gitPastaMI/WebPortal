const AuthController = require('./controllers/AuthController')

module.exports = (app) => {
  app.get('/',(req,res) => {
    res.send('Express server up and listening...');
  });

  app.post('/register', AuthController.register);
}
