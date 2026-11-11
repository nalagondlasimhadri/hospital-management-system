require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const createLabTech = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const email = "labtech@hospital.com";
    const password = "LabTech@123";

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("Lab Technician account already exists!");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      name: "Lab Technician",
      email,
      password: hashedPassword,
      role: "Lab Technician",
    });

    console.log("Lab Technician account created successfully!");

  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};

createLabTech();