const express = require("express");
const Invoice = require("../models/Invoice");

const router = express.Router();

// POST - Create Invoice
router.post("/", async (req, res) => {
  try {
    const invoice = new Invoice(req.body);

    const savedInvoice = await invoice.save();

    res.status(201).json({
      message: "Invoice created successfully! 💰",
      invoice: savedInvoice,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create invoice",
      error: error.message,
    });
  }
});

// GET - Fetch All Invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Invoices fetched successfully! 💰",
      count: invoices.length,
      invoices: invoices,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch invoices",
      error: error.message,
    });
  }
});

module.exports = router;