const compression = require('compression');
const bodyParser = require('body-parser');
const config = require('../config');

/**
 * Configures/Initializes the required settings and middleware for an Express application
 *
 * @param {Object} app - The Express application to be configured
 */
module.exports = function initExpress(app) {
  app.set('port', config.PORT);

  app.use(bodyParser.json({ type: 'application/json' }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(compression());
};
