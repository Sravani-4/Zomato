// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const axios = require("axios");

// Create a group order
router.post("/", createGroupOrder);

// Split the bill
router.post("/:orderId/split", splitBill);

// Controller functions
async function createGroupOrder(req, res) {
  try {
    // Simulated response as we don't have access to Zomato's API
    const restaurantData = {
      name: "Example Restaurant",
      address: "123 Main St",
      cuisine: "Italian",
      menu: [
        { name: "Pizza Margherita", price: 10.99 },
        { name: "Pasta Carbonara", price: 12.99 },
        { name: "Tiramisu", price: 6.99 },
      ],
    };

    // Implement logic to create a group order and save restaurant details
    const orderId = "EXAMPLE_ORDER_ID";

    res
      .status(201)
      .json({
        message: "Group order created successfully",
        orderId,
        restaurant: restaurantData,
      });
  } catch (error) {
    console.error("Error creating group order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

function splitBill(req, res) {
  // Retrieve order details from request or database
  const orderId = req.params.orderId;
  const totalAmount = req.body.totalAmount; // Assuming totalAmount is sent in the request body
  const numPeople = req.body.numPeople; // Assuming numPeople is sent in the request body

  // Check if all required parameters are provided
  if (!totalAmount || !numPeople) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  // Calculate individual share
  const individualShare = totalAmount / numPeople;

  // Respond with individual share
  res.json({ orderId, individualShare });
}

module.exports = router;
