// models/user.js

const db = require("../dataBase/db");

class User {
  static addUser(user, callback) {
    const { name, email, password } = user;
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.run(sql, [name, email, password], function (err) {
      callback(err, { id: this.lastID, ...user });
    });
  }

  static getUser(id, callback) {
    const sql = "SELECT * FROM users WHERE id = ?";
    db.get(sql, [id], (err, row) => {
      callback(err, row);
    });
  }

  static editUser(id, user, callback) {
    const { name, email, password } = user;
    const sql =
      "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
    db.run(sql, [name, email, password, id], function (err) {
      callback(err, { id, ...user });
    });
  }

  static deleteUser(id, callback) {
    const sql = "DELETE FROM users WHERE id = ?";
    db.run(sql, [id], function (err) {
      callback(err, this.changes);
    });
  }
}

module.exports = User;
