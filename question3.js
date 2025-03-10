const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Zaira Mae Mier' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
