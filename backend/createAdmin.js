
require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected!");

    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
      throw new Error("Admin email or password missing in .env");
    }

    const existingAdmin = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingAdmin) {
      console.log("This email already exists!");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const admin = new User({
      name: "Hospital Admin",
      email: email.toLowerCase(),
      password: hashedPassword,
      role: "Admin",
    });

    await admin.save();

    console.log("Admin account created successfully! 🎉");
    console.log("Email:", email);
    console.log("Role: Admin");
  } catch (error) {
    console.error("Admin creation failed:", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

createAdmin();
