
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const createReceptionist = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const email = "receptionist@hospital.com";
    const password = "Reception@123";

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("Receptionist account already exists!");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      name: "Test Receptionist",
      email,
      password: hashedPassword,
      role: "Receptionist",
    });

    console.log("Receptionist account created successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};

createReceptionist();
