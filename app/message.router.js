const express = require("express");
const messageController = require("./message.controller");
const messageControllers = require("./message.controller");

const messageRouter = express.Router();

messageRouter.post("/whatsapp", (req, res) => {
  messageControllers.messageController(req, res);
});

messageRouter.post("/results", (req, res) => {
  messageControllers.messageStatus(req, res);
});

module.exports = messageRouter;
