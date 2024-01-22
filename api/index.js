const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const pool = mysql.createPool({
  host: 'your-host',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Handle both POST and GET requests for /api/product_details
app.route('/api/product_details')
  .post(async (req, res) => {
    try {
      const connection = await pool.getConnection();
      await connection.query('INSERT INTO your_table_name SET ?', req.body);
      connection.release();
      console.log('Data inserted successfully');
      res.status(200).send('Data received and saved successfully');
    } catch (error) {
      console.error('Error saving data to the database:', error);
      res.status(500).send('Internal Server Error');
    }
  })
  .get(async (req, res) => {
    try {
      const connection = await pool.getConnection();
      const [data] = await connection.query('SELECT * FROM your_table_name');
      connection.release();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error retrieving data from the database:', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
