const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: "Price must be an integer.",
    },
  },
  ingredients: {
    type: [String],
    required: true,
    validate: [(arr) => arr.length > 0, "At least one ingredient is required."],
  },
  category: {
    type: [String],
    required: true,
  },
  madedate: {
    type: Date,
  },
  expriredate: {
    type: Date,
  },
});

module.exports = mongoose.model("Item", itemSchema);
