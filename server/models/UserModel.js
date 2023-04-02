const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An user must have a name'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'An user must have a name'],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', tourSchema);

module.exports = User;
