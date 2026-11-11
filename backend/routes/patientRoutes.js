
const express = require("express");
const Patient = require("../models/Patient");
const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Add a new patient
router.post(
  "/",
  protect,
  authorize("Admin", "Receptionist"),
  async (req, res) => {
    try {
      const patient = new Patient(req.body);

      const savedPatient = await patient.save();

      res.status(201).json({
        message: "Patient registered successfully! 🏥",
        patient: savedPatient,
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed to register patient",
        error: error.message,
      });
    }
  }
);

// Get all patients
router.get(
  "/",
  protect,
  authorize("Admin", "Doctor", "Receptionist", "Nurse"),
  async (req, res) => {
    try {
      const patients = await Patient.find().sort({
        createdAt: -1,
      });

      res.status(200).json({
        message: "Patients fetched successfully! 🏥",
        count: patients.length,
        patients: patients,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to fetch patients",
        error: error.message,
      });
    }
  }
);

module.exports = router;
