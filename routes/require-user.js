const { User } = require('../models');

function requireUser(req, res, next) {
  const userIdFromSession = 1; // TODO add when doing auth feature
  User.findById(userIdFromSession)
    .then( (user)=> {
      if(!user) {
        // login!
        throw 'User not found!';
      } else {
        // save user instance on request
        req.user = user;
        next()
      }
    }).catch(next)
}

module.exports = requireUser;
