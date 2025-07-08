const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  selectedClient: {
    value: String,
    label: String,
  },
  clientLoanNumber: String,
  selectedReportTypes: [String],

  propertyInfo: {
    propertyType: String,
    address: String,
    specs: {
      aboveGradeSqft: Number,
      hasBasement: Boolean,
      bedrooms: Number,
      bathrooms: Number,
      yearBuilt: Number,
      stories: Number,
      lotSize: String,
    },
  },

  orderRecipients: {
    contactName: String,
    contactNumber: String,
    contactEmail: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
