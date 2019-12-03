const express = require("express");
const messageController = require("./message.controller");

const messageRouter = express.Router();

messageRouter.post("/whatsapp", (req, res) => {});

module.exports = messageRouter;
