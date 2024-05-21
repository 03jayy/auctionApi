const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.post("/", itemController.addItem);
router.get("/:id", itemController.getItem);
router.put("/:id", itemController.editItem);
router.delete("/:id", itemController.deleteItem);

module.exports = router;
