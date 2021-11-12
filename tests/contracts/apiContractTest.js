const newman = require("newman");
newman.run({
  collection: require("./TODO.postman_collection.json"),
  reporters: "cli",
});
