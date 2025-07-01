const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world! Your Node.js app is running. 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});