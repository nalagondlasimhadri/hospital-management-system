const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

// Add a new appointment
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);

    const savedAppointment = await appointment.save();

    res.status(201).json({
      message: "Appointment booked successfully! 📅",
      appointment: savedAppointment,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to book appointment",
      error: error.message,
    });
  }
});

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Appointments fetched successfully! 📅",
      count: appointments.length,
      appointments: appointments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch appointments",
      error: error.message,
    });
  }
});

module.exports = router;