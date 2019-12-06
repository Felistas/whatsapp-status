const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  msid: { type: String, required: true },
  mobileNo: { type: String, required: true },
  whatsAppBody: { type: String, required: true },
  whatsAppStatus: { type: String, required: true }
});

const messageModel = mongoose.model("Message", messageSchema);

module.exports = messageModel;
