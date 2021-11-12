const express = require("express");
const router = express.Router();

router.get("/todos", (_, response) => {
  response.status(200).send({ message: "Server is up" });
});

module.exports = router;
