// backend/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'ayampotong.db'), (err) => {
  if (err) console.error(err.message);
  else console.log('Connected to SQLite database.');
});

// Buat tabel jika belum ada
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS income (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    quantity INTEGER,
    price REAL,
    total REAL,
    note TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS expense (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    type TEXT,
    amount REAL,
    note TEXT
  )`);
});

module.exports = db;

