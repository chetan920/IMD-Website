const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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

module.exports = mongoose.model("User", userSchema);
