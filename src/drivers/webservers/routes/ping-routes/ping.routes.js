const express = require("express");
const router = express.Router();

router.get("/ping", (_, response) => {
  response.sendStatus(200);
});

module.exports = router;
