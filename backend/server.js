// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/income', require('./routes/income'));
app.use('/expense', require('./routes/expense'));
app.use('/report', require('./routes/report'));

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

