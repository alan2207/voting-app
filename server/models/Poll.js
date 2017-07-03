const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating poll schema
const PollSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  options: [],
  voters: []
});


const Poll = mongoose.model('poll', PollSchema);

module.exports = Poll;
