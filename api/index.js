const express = require('express');
const cors = require('cors');

const app = express();

// 👇️ configure CORS
app.use(cors());

app.get('/products/:id', function (req, res) {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
