const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ftrIssueSchema = new Schema({
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

const FtrIssue = new mongoose.model('FtrIssue', ftrIssueSchema)
module.exports = FtrIssue