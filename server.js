const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vuecrud',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Handle POST request to save product details
app.post('/api/product_details', (req, res) => {
  const { p_code_no, category, p_name, quantity } = req.body;

  // Validate the received data if necessary

  // Perform the database insertion
  const sql = 'INSERT INTO product_details (p_code_no, category, p_name, quantity) VALUES (?, ?, ?, ?)';
  db.query(sql, [p_code_no, category, p_name, quantity], (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted into MySQL:', result);
      res.status(200).json({ message: 'Data received and inserted successfully' });
    }
  });
});
app.get('/api/product_details', (req, res) => {
  // Perform the database retrieval
  const sql = 'SELECT * FROM product_details';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error retrieving data from MySQL:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data retrieved from MySQL:', result);
      res.status(200).json(result);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
