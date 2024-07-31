require('dotenv').config();
const express = require('express');
const patientRoutes = require('./routes/patientRoutes.js');
const cors = require('cors');

const PORT = process.env.PORT || 4001 || 4002;
const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// Handle preflight requests
app.options('*', cors());

app.use('/api/data_tmp/', patientRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});