const express = require("express");
const Admission = require("../models/Admission");

const router = express.Router();

// Add a new admission
router.post("/", async (req, res) => {
  try {
    const admission = new Admission(req.body);

    const savedAdmission = await admission.save();

    res.status(201).json({
      message: "Patient admitted successfully! 🏥",
      admission: savedAdmission,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add admission",
      error: error.message,
    });
  }
});

// Get all admissions
router.get("/", async (req, res) => {
  try {
    const admissions = await Admission.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Admissions fetched successfully! 🛏️",
      count: admissions.length,
      admissions: admissions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch admissions",
      error: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedAdmission =
      await Admission.findOneAndUpdate(
        { admissionId: req.params.id },
        {
          $set: {
            dischargeDate:
              req.body.dischargeDate || new Date(),
            status:
              req.body.status || "Discharged",
            notes:
              req.body.notes || "",
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedAdmission) {
      return res.status(404).json({
        message: "Admission not found",
      });
    }

    res.status(200).json({
      message:
        "Patient discharged successfully! 🏥",
      admission: updatedAdmission,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to discharge patient",
      error: error.message,
    });
  }
});

module.exports = router;