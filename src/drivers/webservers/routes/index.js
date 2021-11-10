const express = require("express");
const router = express.Router();
const pingRoutes = require("./ping-routes");

//  Registering the routes with the router (Public Routes)
pingRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
