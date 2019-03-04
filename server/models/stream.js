const mongoose = require('mongoose')

const StreamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true,
    maxlength: 240
  },
  userId:{
    type: String,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Streams', StreamSchema)