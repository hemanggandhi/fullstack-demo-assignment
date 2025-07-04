// backend/server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const clientRoutes = require("./routes/clientRoutes");
const reportTypes = require("./routes/reportTypes");
console.log(
  "reportTypes routes loaded:",
  reportTypes.stack?.length || typeof reportTypes
);

// ... other imports

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Mongo
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/test", (req, res) => {
  res.send("Test route works!");
});

// Mount auth routes
app.use("/api/auth", authRoutes);

// ... mount other routes (clients, report-types, form-intake, etc.)
app.use("/api/clients", clientRoutes);
app.use("/api/reportTypes", reportTypes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
