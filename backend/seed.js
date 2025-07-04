require("dotenv").config();
console.log("MONGODB_URI:", process.env.MONGODB_URI);

const mongoose = require("mongoose");
const Client = require("./models/Client");
const ReportType = require("./models/ReportType");
const User = require("./models/User");
const bcrypt = require("bcrypt");

const MONGODB_URI = process.env.MONGODB_URI;

async function seed() {
  await mongoose.connect(MONGODB_URI);

  // 1. Clear existing lookup data
  await Client.deleteMany({});
  await ReportType.deleteMany({});
  await User.deleteMany({});

  // 2. Seed clients
  await Client.insertMany([
    { name: "Anhas Web" },
    { name: "Test Client" },
    { name: "Border Prime" },
    { name: "Citadel Reality" },
    { name: "Elora Caves" },
    { name: "Effil Infro" },
    { name: "Dutch Properties" },
    { name: "Dublin Estates" },
  ]);

  // 3. Seed report types
  await ReportType.insertMany([
    { name: "AIVM" },
    { name: "Property Valuation" },
  ]);

  // 4. Create admin user
  const passwordHash = await bcrypt.hash("Ahmd5698#", 10);
  await User.create({
    username: "anhasadmin",
    passwordHash,
  });

  console.log("✅ Database seeded with clients, report_types, and admin user");
  await mongoose.disconnect();
}

seed().catch((err) => console.error(err) || process.exit(1));
