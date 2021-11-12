const mongoose = require("mongoose");

// Mongoose connection
mongoose
  .connect(process.env.CONNECTION_STRING_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .catch((error) => console.log("error", "Mongoose connection Issue:", error));

// Connectivity status on connection establishment
mongoose.connection.on("connected", () =>
  console.log("info", "Mongoose connection:", "Connection Established")
);

// Connectivity status on connection resetting
mongoose.connection.on("reconnected", () =>
  console.log("info", "Mongoose connection:", "Connection Reestablished")
);

// Connectivity status on disconnection
mongoose.connection.on("disconnected", () =>
  console.log("info", "Mongoose connection:", "Connection Disconnected")
);

// Connectivity Status on connection close
mongoose.connection.on("close", () =>
  console.log("info", "Mongoose connection Issue:", "Connection Closed")
);

// Connectivity Status on error
mongoose.connection.on("error", (error) =>
  console.log("error", "Mongoose connection Issue:", error)
);

export const oMongoose = mongoose;
