const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  msid: { type: String, required: true },
  mobileNo: { type: Number, required: true },
  whatsAppStatus: { type: String, required: true }
});

const messageModel = mongoose.model("User", messageSchema);

module.exports = messageModel;
