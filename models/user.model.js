const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
  categories: [String],
  sources: [String],
  language: { type: String, default: 'en' }
});

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    preferences: { type: preferenceSchema, default: {} }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
