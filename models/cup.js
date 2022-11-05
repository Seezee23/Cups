const mongoose = require('mongoose')

// Make A Schema
const cupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  Image: String,
})

// Make A Model From The Schema

const Cup = mongoose.model('Cup', cupSchema)

// Export The Model For Use  In The App

module.exports = Cup