const express = require("express");
const clientsController = require("../controllers/clientsController");
const policiesController = require("../controllers/policiesController");

module.exports = function initRoutes(app) {
  app.get("/", clientsController.get);
};
