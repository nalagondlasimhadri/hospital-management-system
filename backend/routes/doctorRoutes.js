const express = require("express");
const Doctor = require("../models/Doctor");

const router = express.Router();

// Add a new doctor
router.post("/", async (req, res) => {
  try {
    const doctor = new Doctor(req.body);

    const savedDoctor = await doctor.save();

    res.status(201).json({
      message: "Doctor added successfully! 👨‍⚕️",
      doctor: savedDoctor,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add doctor",
      error: error.message,
    });
  }
});

// Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Doctors fetched successfully! 👨‍⚕️",
      count: doctors.length,
      doctors: doctors,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch doctors",
      error: error.message,
    });
  }
});

module.exports = router;