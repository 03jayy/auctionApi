const User = require("../models/user");

exports.addUser = (req, res) => {
  User.addUser(req.body, (err, user) => {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json(user);
  });
};

exports.getUser = (req, res) => {
  User.getUser(req.params.id, (err, user) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  });
};

exports.editUser = (req, res) => {
  User.editUser(req.params.id, req.body, (err, user) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(user);
  });
};

exports.deleteUser = (req, res) => {
  User.deleteUser(req.params.id, (err, changes) => {
    if (err) return res.status(400).json({ error: err.message });
    if (changes === 0) return res.status(404).json({ error: "User not found" });
    res.status(204).send();
  });
};
