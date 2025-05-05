const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    const uri = 'mongodb+srv://hernandezleslie373:Password@cluster0.ujhoppz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas', error);
  }
};

module.exports = connectToDatabase;

