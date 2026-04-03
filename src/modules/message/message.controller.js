const Message = require("./message.model");

const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = await Message.create({
      name,
      email,
      message,
    });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Server error : Message not created" });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error : Failed to fetch messages" });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await Message.findByIdAndDelete(id);
    res.status(200).json({ message: "Message Deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error : Failed to delete message" });
  }
};

module.exports = {
  createMessage,
  getMessages,
  deleteMessage,
};
