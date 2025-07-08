const mongoose = require("mongoose");

const OrderLineItemSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  descriptionOfWork: String,
  budget: Number,
});

module.exports = mongoose.model("OrderLineItem", OrderLineItemSchema);
