var db = require('../models/dbconnection');
const jwt = require('jsonwebtoken');

const secretKey = "UnsecureSecretKey";

function authenticateUser(req, res) {
  // Authenticate user then return JWT

  user = req.body.user;
  pass = req.body.pass;

  var results = db.query('SELECT * FROM users WHERE username = ? AND password = ?', [user, pass], function (error, results, fields) {

    if (error) {
      console.log(error);
      res.json({"error": "Something went wrong, check logs"});
      return;
    }

    loggedInUser = results[0]["username"]

    console.log(`User "${loggedInUser}" authenticated`);
    token = jwt.sign(
      {user: loggedInUser},
      secretKey,
      {expiresIn: "60s"}
    )

    var apiResult = {token: token};
    res.json(apiResult);
  });
}

function authenticateToken(req, res) {
  // Authenticate JWT

}

var Authentication = {
  authenticateUser: authenticateUser,
  authenticateToken: authenticateToken
}

module.exports = Authentication;
