const express = require("express");
const router = express.Router();
const ReportTypes = require("../models/ReportTypes"); // correct relative path

router.get("/", async (req, res) => {
  try {
    const reportTypes = await ReportTypes.find({}, { name: 1, _id: 0 });
    res.json(reportTypes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch report types" });
  }
});

module.exports = router;
