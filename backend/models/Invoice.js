const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    invoiceId: {
      type: String,
      required: true,
      unique: true,
    },

    patient: {
      type: String,
      required: true,
      trim: true,
    },

    patientId: {
      type: String,
      trim: true,
    },

    invoiceDate: {
      type: Date,
      required: true,
    },

    items: [
      {
        description: {
          type: String,
          required: true,
          trim: true,
        },

        quantity: {
          type: Number,
          default: 1,
          min: 1,
        },

        price: {
          type: Number,
          required: true,
          min: 0,
        },

        amount: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],

    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
    },

    tax: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentMethod: {
      type: String,
      enum: [
        "Cash",
        "Card",
        "UPI",
        "Insurance",
        "Other",
      ],
      default: "Cash",
    },

    paymentStatus: {
      type: String,
      enum: [
        "Paid",
        "Pending",
        "Partially Paid",
      ],
      default: "Pending",
    },

    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model(
  "Invoice",
  invoiceSchema
);

module.exports = Invoice;