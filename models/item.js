const db = require("../dataBase/db");

class Item {
  static addItem(item, callback) {
    const { name, quantity, price, category, description } = item;
    const sql =
      " INSERT INTO auction (productName, quantity, procePerUnit, productCategory, productDescription) VALUES (?, ?, ?, ?, ?)";
    db.run(sql, [name, quantity, price, category, description], function (err) {
      callback(err, { id: this.lastID, ...item });
    });
  }

  static getItem(id, callback) {
    const sql = "SELECT * FROM auction WHERE id = ?";
    db.get(sql, [id], (err, row) => {
      callback(err, row);
    });
  }

  static editItem(id, item, callback) {
    const { name, quantity, price, category, description } = item;
    const sql =
      "UPDATE auction SET productName = ?, quantity = ?, pricePerUnit = ?, productCategory = ?, productDescription = ?  WHERE id = ?";
    db.run(sql, [name, quantity, price, category, description, id], (err) => {
      callback(err, { id, ...item });
    });
  }

  static removeItem(id, callback) {
    const sql = "DELETE FROM auction WHERE id = ?";
    db.run(sql, [id], (err) => {
      callback(err, this.changes);
    });
  }
}

module.exports = Item;
