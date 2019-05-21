const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoute = require('./routes/posts');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log('connected to DB')
);

const authRoute = require('./routes/auth');

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => {
  console.log(`Up and running on port ${PORT}`);
});
