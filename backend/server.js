const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const medicineRoutes = require("./routes/medicineRoutes");
const consultationRoutes = require("./routes/consultationRoutes");
const labTestRoutes = require("./routes/labTestRoutes");
const admissionRoutes = require("./routes/admissionRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Patient routes
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/consultations", consultationRoutes);
app.use("/api/lab-tests", labTestRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/reports", reportRoutes);


// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Hospital Management System Backend is running! 🏥",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});