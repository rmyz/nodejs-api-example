const express = require("express");

const app = express();

require("./init/initExpress")(app);
require("./init/initRoutes")(app);

module.exports = app;
