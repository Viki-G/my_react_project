const express = require('express');
const cors = require('cors'); 
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3003;


app.use(cors());

app.use(cors({
  origin: '*',
  methods: 'GET', 
}));

const filePath = path.join(__dirname, 'animation.json');
console.log(`Looking for file at: ${filePath}`);

// API route to send the animation data
app.get('/animation', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send('Error reading file');
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data); // Sending the JSON content
  });
});

// Start the server on port 3002
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});