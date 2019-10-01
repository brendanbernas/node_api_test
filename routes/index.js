'use strict';

// export by default
module.exports = function (app) {
  // grab
  var strain = require('../controllers/strain');
  var authentication = require('../controllers/authentication');
  // var siteRoot = require('../routes/root');

  // Site index
  // app.use('/', siteRoot);
  app.route('/').get(function (req, res, next) {
    res.send('Welcome to the Kushy API');
  });

  app.route('/authentication')
    .post(authentication.authenticateUser);

  // Strains
  app.route('/strains')
    .get(strain.getAllItems);
  
  app.route('/strains/:id')
    .get(strain.getItemById)
    // .put(strain.updateItem)
    // .delete(strain.deleteItem);
}