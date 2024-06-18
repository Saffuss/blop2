// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// server.js (additional code)
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/youtuber_sponsor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
