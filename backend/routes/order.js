const express = require("express");
const Order = require("../models/Order");
const OrderLineItem = require("../models/OrderLineItem");

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { order, propertyInfo, orderRecipients, excelData } = req.body;

    // Save Order
    const newOrder = new Order({
      ...order,
      propertyInfo,
      orderRecipients,
    });

    const savedOrder = await newOrder.save();

    // Save Line Items
    const lineItems = excelData.map((item) => ({
      orderId: savedOrder._id,
      descriptionOfWork: item["DESCRIPTION OF WORK"],
      budget: Number(item[" BUDGET "]),
    }));

    await OrderLineItem.insertMany(lineItems);

    res.status(201).json({ success: true, orderId: savedOrder._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to submit order" });
  }
});

// Get order by ID
router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

// Get line items by Order ID
router.get("/:id/line-items", async (req, res) => {
  const items = await OrderLineItem.find({ orderId: req.params.id });
  res.json(items);
});

module.exports = router;
