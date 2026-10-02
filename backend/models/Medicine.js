const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema(
  {
    medicineId: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    manufacturer: {
      type: String,
      trim: true,
    },

    batch: {
      type: String,
      trim: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 0,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    expiry: {
      type: Date,
      required: true,
    },

    supplier: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Medicine = mongoose.model(
  "Medicine",
  medicineSchema
);

module.exports = Medicine;