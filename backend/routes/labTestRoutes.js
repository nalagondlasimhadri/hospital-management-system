const express = require("express");
const LabTest = require("../models/LabTest");

const router = express.Router();

// Add a new lab test
router.post("/", async (req, res) => {
  try {
    const labTest = new LabTest(req.body);

    const savedLabTest = await labTest.save();

    res.status(201).json({
      message: "Lab test added successfully! 🧪",
      labTest: savedLabTest,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add lab test",
      error: error.message,
    });
  }
});

// Get all lab tests
router.get("/", async (req, res) => {
  try {
    const labTests = await LabTest.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Lab tests fetched successfully! 🧪",
      count: labTests.length,
      labTests: labTests,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch lab tests",
      error: error.message,
    });
  }
});

module.exports = router;