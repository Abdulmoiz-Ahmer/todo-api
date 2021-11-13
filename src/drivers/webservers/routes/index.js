const express = require("express");
const router = express.Router();
const pingRoutes = require("./ping-routes");
const todoRoutes = require("./todo-routes");
//  Registering the routes with the router (Public Routes)
pingRoutes.forEach((route) => {
  router.use(`${route.path}api/`, route.route);
});

todoRoutes.forEach((route) => {
  router.use(`${route.path}api/`, route.route);
});

module.exports = router;
