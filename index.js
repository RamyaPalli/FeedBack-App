const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});


const PORT = process.env.PORT || 3480;
app.listen(PORT);