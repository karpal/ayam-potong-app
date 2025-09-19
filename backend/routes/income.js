// backend/routes/income.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.all('SELECT * FROM income ORDER BY date DESC', [], (err, rows) => {
    if (err) res.status(500).send(err);
    else res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { date, quantity, price, total, note } = req.body;
  db.run('INSERT INTO income (date, quantity, price, total, note) VALUES (?, ?, ?, ?, ?)',
    [date, quantity, price, total, note],
    function(err) {
      if (err) res.status(500).send(err);
      else res.json({ id: this.lastID });
    }
  );
});

module.exports = router;

