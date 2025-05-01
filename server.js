const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db');
const courseRoutes = require('./courseRoutes');

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json()); 
connectToDatabase(); 

app.use('/courses', courseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
