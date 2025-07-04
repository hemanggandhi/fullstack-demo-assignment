require("dotenv").config();
console.log("MONGODB_URI:", process.env.MONGODB_URI);

const mongoose = require("mongoose");
const Client = require("./models/clients");
const Report_Type = require("./models/report_types");
const Users = require("./models/users");
const bcrypt = require("bcrypt");

const MONGODB_URI = process.env.MONGODB_URI;

async function seed() {
  await mongoose.connect(MONGODB_URI);

  await Client.deleteMany({});
  await Report_Type.deleteMany({});
  await Users.deleteMany({});

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

  await Report_Type.insertMany([
    { name: "AIVM" },
    { name: "Property Valuation" },
  ]);

  const passwordHash = await bcrypt.hash("Ahmd5698#", 10);
  await Users.create({
    username: "anhasadmin",
    passwordHash,
  });

  console.log("✅ Database seeded with clients, report_types, and admin user");
  await mongoose.disconnect();
}

seed().catch((err) => console.error(err) || process.exit(1));
