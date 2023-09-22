const mongoose = require('mongoose');

const MeetupSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Meetup = mongoose.model('meetup', MeetupSchema);