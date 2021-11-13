const config = require("./src/config/index");
const server = require("./src/drivers/webservers/app.js");
server.listen(config.PORT, () => {
  console.log("Server is running on port 4000");
});
