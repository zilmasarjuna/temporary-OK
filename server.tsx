const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const filePath = path.join(__dirname, 'build', 'index.html');

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function (_req, res) {
  res.sendFile(filePath);
});

app.listen(3000);
