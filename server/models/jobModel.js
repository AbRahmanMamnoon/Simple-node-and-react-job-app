const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({

  title: {
    type: String,
  },
  type: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  salary: {
    type: String,
  },
  active: {
    type: String,
    default: true
  },
  company: {
    name: {
      type: String,
    },
    contactEmail: {
      type: String,
    },
    contactPhone: {
      type: String,
    }
  }

});

module.exports = mongoose.model('Job', jobSchema);