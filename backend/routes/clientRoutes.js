// backend/routes/clientRoutes.js
const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

// GET /api/clients?search=abc
router.get("/", async (req, res) => {
  try {
    const searchQuery = req.query.search || "";
    const clients = await Client.find({
      name: { $regex: searchQuery, $options: "i" }, // case-insensitive search
    }).select("name"); // return only name field
    res.json(clients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
