const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve all static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route "/" to public/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
