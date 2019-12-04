const axios = require("axios");
const dotenv = require("dotenv");

const Message = require("./message.model");
dotenv.config();

const authToken = process.env.ACCOUNT_TOKEN;
const authSID = process.env.ACCOUNT_SID;
const url = process.env.TWILIO_URL;

const messageBody = {
  Body: "Twilio HQ",
  From: "whatsapp:+14155238886",
  PersistentAction: "geo:37.787890,-122.391664",
  To: "whatsapp:+254716915775"
};

const messageController = (req, res) => {
  axios
    .post(url, new URLSearchParams(messageBody), {
      auth: {
        username: authSID,
        password: authToken
      }
    })
    .then(response => {
      const messageResponse = {
        msid: response.data.sid,
        mobileNo: response.data.to,
        whatsAppStatus: response.data.status
      };
      new Message(messageResponse).save();
      res.status(200).send("Message sent successfully");
    })
    .catch(error => {
      res
        .status(400)
        .send("Oops!, an error occurred while sending the request");
    });
};

const messageStatus = async (req, res) => {
  const message = await Message.find({ msid: req.body.MessageSid });
  if (!message) {
    res.send("Message Not found!");
  } else {
      await Message.findOneAndUpdate(
        {
          msid: req.body.MessageSid
        },
        { whatsAppStatus: req.body.MessageStatus }
      )
  }
};

module.exports = {
  messageController: messageController,
  messageStatus: messageStatus
};
