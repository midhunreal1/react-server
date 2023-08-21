const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api/data', (req, res) => {

  const data = { message: 'Hello from the server!' };
  res.json(data);
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
