
const express = require("express");
const Consultation = require("../models/Consultation");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Add a new consultation - Admin and Doctor
router.post(
  "/",
  protect,
  authorize("Admin", "Doctor"),
  async (req, res) => {
    try {
      const consultation = new Consultation(req.body);

      const savedConsultation = await consultation.save();

      res.status(201).json({
        message: "Consultation added successfully! 🩺",
        consultation: savedConsultation,
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed to add consultation",
        error: error.message,
      });
    }
  }
);

// Get all consultations - Admin and Doctor
router.get(
  "/",
  protect,
  authorize("Admin", "Doctor"),
  async (req, res) => {
    try {
      const consultations = await Consultation.find().sort({
        createdAt: -1,
      });

      res.status(200).json({
        message: "Consultations fetched successfully! 🩺",
        count: consultations.length,
        consultations: consultations,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to fetch consultations",
        error: error.message,
      });
    }
  }
);

module.exports = router;
