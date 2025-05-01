const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose.connect('mongodb+srv://hernandezleslie373:Password@cluster0.ujhoppz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
      console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB Atlas', error);
    });
}

module.exports = connectToDatabase;
