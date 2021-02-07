const jwt = require('jsonwebtoken');
const config = require('./config.js');

const withAuth = function(req, res, next) {
  const token = req.cookies["woa_token"];
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, config.token.secret, function(err, decoded) {
      if (err) {
        console.log(err);
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
}
module.exports = withAuth;