// backend/routes/expense.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.all('SELECT * FROM expense ORDER BY date DESC', [], (err, rows) => {
    if (err) res.status(500).send(err);
    else res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { date, type, amount, note } = req.body;
  db.run('INSERT INTO expense (date, type, amount, note) VALUES (?, ?, ?, ?)',
    [date, type, amount, note],
    function(err) {
      if (err) res.status(500).send(err);
      else res.json({ id: this.lastID });
    }
  );
});

module.exports = router;

