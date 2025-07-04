const mongoose = require("mongoose");

const ReportTypeSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
  },
  { collection: "report_types" }
);

module.exports = mongoose.model("Report_Types", ReportTypeSchema);
