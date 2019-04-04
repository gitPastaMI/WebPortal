const {User} = require('../models')

module.exports = {
  async register (req,res) {
    // res.send(req.body);
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (e) {
      res.send({
        error: {
          msg: 'This email account is already in use.',
          ename: e.name,
          emsg: e.message
          }
      })
    } finally {

    }
  }
}
