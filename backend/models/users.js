const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", usersSchema);
