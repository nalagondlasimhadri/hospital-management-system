const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
  {
    consultationId: {
      type: String,
      required: true,
      unique: true,
    },

    patient: {
      type: String,
      required: true,
      trim: true,
    },

    doctor: {
      type: String,
      required: true,
      trim: true,
    },

    date: {
      type: Date,
      required: true,
    },

    symptoms: {
      type: String,
      trim: true,
    },

    diagnosis: {
      type: String,
      trim: true,
    },

    treatment: {
      type: String,
      trim: true,
    },

    notes: {
      type: String,
      trim: true,
    },

    followUpDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["Completed", "In Progress", "Follow-up"],
      default: "Completed",
    },
  },
  {
    timestamps: true,
  }
);

const Consultation = mongoose.model(
  "Consultation",
  consultationSchema
);

module.exports = Consultation;