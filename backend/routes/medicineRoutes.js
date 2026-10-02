const express = require("express");
const Medicine = require("../models/Medicine");

const router = express.Router();

// Add a new medicine
router.post("/", async (req, res) => {
  try {
    const medicine = new Medicine(req.body);

    const savedMedicine = await medicine.save();

    res.status(201).json({
      message: "Medicine added successfully! 💊",
      medicine: savedMedicine,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add medicine",
      error: error.message,
    });
  }
});

// Get all medicines
router.get("/", async (req, res) => {
  try {
    const medicines = await Medicine.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Medicines fetched successfully! 💊",
      count: medicines.length,
      medicines: medicines,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch medicines",
      error: error.message,
    });
  }
});

module.exports = router;