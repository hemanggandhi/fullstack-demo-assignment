const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true,
    maxlength: 50,
  },
});

module.exports = mongoose.model("Clients", clientSchema);
