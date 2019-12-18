const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AutomationSchema = new Schema({
  deviceid: {
    type: String,
    required: true,
    maxlength: 20
  },
  imei: {
    type: String,
    required: true,
    maxlength: 200
  },
  status: {
    type: String,
    required: true,
    maxlength: 300
  }
}, { timestamps: true })

const Automation = new mongoose.model('Automation', AutomationSchema)
module.exports = Automation