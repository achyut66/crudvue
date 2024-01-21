const express = require('express');
const bodyParser = require('body-parser'); // Middleware for parsing JSON in the request body

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Handle POST request for /api/product_details
app.post('/api/product_details', (req, res) => {
  console.log('Received POST request:', req.body);

  // Process the data and save to the database
  // Implement your database logic here

  res.status(200).send('Data received successfully');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
