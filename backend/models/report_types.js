const mongoose = require("mongoose");

const reportTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
});

module.exports = mongoose.model("Report_types", reportTypeSchema);
