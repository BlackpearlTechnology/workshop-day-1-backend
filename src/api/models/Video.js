const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 255
  },
  description: {
    type: String,
    required: true,
    maxlength: 255
  },
  uploader: {
    type: String,
    required: true,
    maxlength: 255
  }
}, { timestamps: true })

const Video = new mongoose.model('Video', videoSchema)
module.exports = Video