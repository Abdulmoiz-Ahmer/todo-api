const server = require("./src/drivers/webservers/app.js");
server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
