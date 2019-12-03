const mongoose = require("mongoose");

const connect = async () => {
  mongoose.connect("mongodb://localhost/WhatsAppDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  await db.once("open", function() {
    console.log("Database successfully connected");
  });
};

module.exports = connect;
