const express = require("express");
const bodyParser = require("body-parser");

const connect = require("./utils/db");
const messageRouter = require("./app/message.router");

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", messageRouter);


app.listen(port, async () => {
  await connect();
  await console.log(`Application successfully running on port: ${port}`);
});
