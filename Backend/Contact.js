const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    // unique: true,
  },
  message: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
