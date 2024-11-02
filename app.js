const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const imageRoutes = require('./routes/imageRoutes');

dotenv.config();
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/images', imageRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
