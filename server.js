const express = require('express')
const app = express();
const connectDB = require('./db');
connectDB();
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server listening on port:",PORT);
});