// backend/routes/report.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.get('SELECT SUM(total) AS totalIncome FROM income', [], (err, incomeRow) => {
    if (err) return res.status(500).send(err);
    db.get('SELECT SUM(amount) AS totalExpense FROM expense', [], (err, expenseRow) => {
      if (err) return res.status(500).send(err);
      const totalIncome = incomeRow.totalIncome || 0;
      const totalExpense = expenseRow.totalExpense || 0;
      res.json({
        totalIncome,
        totalExpense,
        profit: totalIncome - totalExpense
      });
    });
  });
});

module.exports = router;

