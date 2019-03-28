const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
  });

  app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});