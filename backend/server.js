require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const clientRoutes = require("./routes/clientRoutes");
const reportTypes = require("./routes/reportTypes");
const orderRoutes = require("./routes/order.js");

console.log("🔍 MONGO_URI from .env:", process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

// Connection to MongoDB
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

// ... mount other routes
app.use("/api/clients", clientRoutes);
app.use("/api/reportTypes", reportTypes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
