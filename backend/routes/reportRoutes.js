const express = require("express");

const Patient = require("../models/Patient");
const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
const Medicine = require("../models/Medicine");
const LabTest = require("../models/LabTest");
const Admission = require("../models/Admission");
const Invoice = require("../models/Invoice");

const router = express.Router();

// GET - Hospital Reports
router.get("/", async (req, res) => {
  try {
    // Count documents
    const totalPatients =
      await Patient.countDocuments();

    const totalAppointments =
      await Appointment.countDocuments();

    const totalDoctors =
      await Doctor.countDocuments();

    const totalMedicines =
      await Medicine.countDocuments();

    const totalLabTests =
      await LabTest.countDocuments();

    const totalAdmissions =
      await Admission.countDocuments();

    const totalInvoices =
      await Invoice.countDocuments();

    // Revenue
    const revenueResult =
      await Invoice.aggregate([
        {
          $group: {
            _id: null,
            totalRevenue: {
              $sum: "$totalAmount",
            },
          },
        },
      ]);

    const totalRevenue =
      revenueResult.length > 0
        ? revenueResult[0].totalRevenue
        : 0;

    // Paid revenue
    const paidRevenueResult =
      await Invoice.aggregate([
        {
          $match: {
            paymentStatus: "Paid",
          },
        },
        {
          $group: {
            _id: null,
            paidRevenue: {
              $sum: "$totalAmount",
            },
          },
        },
      ]);

    const paidRevenue =
      paidRevenueResult.length > 0
        ? paidRevenueResult[0].paidRevenue
        : 0;

    // Monthly Revenue
const monthlyRevenue =
  await Invoice.aggregate([
    {
      $group: {
        _id: {
          month: {
            $month: "$invoiceDate",
          },
          year: {
            $year: "$invoiceDate",
          },
        },

        value: {
          $sum: "$totalAmount",
        },
      },
    },

    {
      $sort: {
        "_id.year": 1,
        "_id.month": 1,
      },
    },
  ]);

    


    // Appointment status
    const appointmentStatus =
      await Appointment.aggregate([
        {
          $group: {
            _id: "$status",
            count: {
              $sum: 1,
            },
          },
        },
      ]);

    // Admission status
    const admissionStatus =
      await Admission.aggregate([
        {
          $group: {
            _id: "$status",
            count: {
              $sum: 1,
            },
          },
        },
      ]);

    // Lab test status
    const labStatus =
      await LabTest.aggregate([
        {
          $group: {
            _id: "$status",
            count: {
              $sum: 1,
            },
          },
        },
      ]);

      // Department-wise Patient Count
const departmentData =
  await Patient.aggregate([
    {
      $match: {
        department: {
          $exists: true,
          $ne: "",
        },
      },
    },
    {
      $group: {
        _id: "$department",
        patients: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        patients: -1,
      },
    },
  ]);

    res.status(200).json({
      message:
        "Hospital reports fetched successfully! 📊",

      reports: {
        totals: {
          patients: totalPatients,
          appointments: totalAppointments,
          doctors: totalDoctors,
          medicines: totalMedicines,
          labTests: totalLabTests,
          admissions: totalAdmissions,
          invoices: totalInvoices,
        },

        revenue: {
          total: totalRevenue,
          paid: paidRevenue,
        },

        monthlyRevenue,

        appointmentStatus,

        admissionStatus,

        labStatus,

        departmentData,
      },
    });
  } catch (error) {
    console.error(
      "Reports Error:",
      error
    );

    res.status(500).json({
      message:
        "Failed to generate hospital reports",
      error: error.message,
    });
  }
});

module.exports = router;