// Importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Import path module

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URI
const mongoURI = 'mongodb+srv://kaziarifulla:J6V8G89qEvOg4vP3@arif.xy7ev.mongodb.net/gamified_learning?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/gamified-learning'))); // Update to your actual dist folder name

// Serve the Angular app for all routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/gamified-learning/admin-panel.component.html')); // Update to your actual dist folder name
});

// Set up the server to listen on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
