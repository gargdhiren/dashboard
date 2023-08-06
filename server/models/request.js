const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  requestType: {
    type: String,
    enum: ['donor', 'recipient'],
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  requestedAt: {
    type: Date,
    default: Date.now,
  },
});

const RequestModel = mongoose.model('requests', requestSchema);

module.exports = RequestModel;
