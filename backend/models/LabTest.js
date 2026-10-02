const mongoose = require("mongoose");

const labTestSchema = new mongoose.Schema(
  {
    testId: {
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
    testName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    doctor: {
      type: String,
      trim: true,
    },

    sample: {
      type: String,
      trim: true,
    },

    testDate: {
      type: Date,
      required: true,
    },

    price: {
  type: Number,
  required: true,
  min: 0,
},

    result: {
      type: String,
      trim: true,
    },

    normalRange: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Sample Collected",
        "Processing",
        "Completed",
      ],
      default: "Pending",
    },

    remarks: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const LabTest = mongoose.model("LabTest", labTestSchema);

module.exports = LabTest;