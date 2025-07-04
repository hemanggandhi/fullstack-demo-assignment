const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
});
module.exports = mongoose.model("Client", UserSchema);
