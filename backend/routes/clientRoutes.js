const express = require("express");
const router = express.Router();
const Client = require("../models/Clients");

router.get("/", async (req, res) => {
  try {
    const searchQuery = req.query.search || "";
    const clients = await Client.find({
      name: { $regex: searchQuery, $options: "i" },
    }).select("name");
    res.json(clients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
