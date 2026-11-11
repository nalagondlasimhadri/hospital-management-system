
const express = require("express");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Any logged-in user
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Authentication successful! 🔐",
    user: req.user,
  });
});

// Admin-only route
router.get("/admin", protect, authorize("Admin"), (req, res) => {
  res.status(200).json({
    message: "Welcome Admin! 🏥",
    user: req.user,
  });
});

module.exports = router;
