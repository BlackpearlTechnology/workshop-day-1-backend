const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AutomationSchema = new Schema({
  priority: {
    type: String,
    required: true,
    maxlength: 20
  },
  title: {
    type: String,
    required: true,
    maxlength: 200
  },
  description: {
    type: String,
    required: true,
    maxlength: 300
  }
}, { timestamps: true })

const Automation = new mongoose.model('Automation', AutomationSchema)
module.exports = Automation