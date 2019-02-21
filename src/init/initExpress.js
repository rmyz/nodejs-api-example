const compression = require('compression');
const bodyParser = require('body-parser');
const config = require('../config');

module.exports = function initExpress(app) {
  app.set('port', config.PORT);

  app.use(bodyParser.json({ type: 'application/json' }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(compression());
};
