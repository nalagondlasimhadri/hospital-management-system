const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    admissionId: {
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

    doctor: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
      trim: true,
    },

    ward: {
      type: String,
      trim: true,
    },

    room: {
  type: String,
  trim: true,
},

    bedNumber: {
      type: String,
      trim: true,
    },

    admissionDate: {
      type: Date,
      required: true,
    },

    dischargeDate: {
      type: Date,
    },

    reason: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: [
        "Admitted",
        "Discharged",
        "Transferred",
      ],
      default: "Admitted",
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

const Admission = mongoose.model(
  "Admission",
  admissionSchema
);

module.exports = Admission;