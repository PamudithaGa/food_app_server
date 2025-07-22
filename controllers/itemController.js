const Item = require("../models/Item");

//GET /api/items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//GET /api/items/:id
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//POST /api/items
exports.createItem = async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      price: parseInt(req.body.price),
      ingredients: req.body.ingredients,
      category: req.body.category,
      madedate: req.body.madedate,
      expriredate: req.body.expriredate,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/items/:id
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          price: parseInt(req.body.price),
          ingredients: req.body.ingredients,
          category: req.body.category,
          madedate: req.body.madedate,
          expriredate: req.body.expriredate,
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedItem)
      return res.status(404).json({ message: "Item not found" });
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//DELETE /api/items/:id
exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem)
      return res.status(404).json({ message: "Item not found" });
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
