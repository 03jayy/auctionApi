// 200 = Succesful retrieval or update
// 201 = Succesful creation
// 204 = Succesful deletion
// 400 = Bad request
// 404 = Item not found

const Item = require("../models/item");

exports.addItem = (req, res) => {
  Item.addItem(req.body, (err, item) => {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json(item);
  });
};

exports.getItem = (req, res) => {
  Item.getItem(req.params.id, (err, item) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  });
};

exports.editItem = (req, res) => {
  Item.editItem(req.params.id, req.body, (err, item) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(item);
  });
};

exports.deleteItem = (req, res) => {
  Item.deleteItem(req.params.id, (err, changes) => {
    if (err) return res.status(400).json({ error: err.message });
    if (changes === 0) return res.status(404).json({ error: "Item not found" });
    res.status(204).send();
  });
};
