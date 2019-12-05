const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 255
  },
  content: {
    type: String,
    required: true,
    maxlength: 255
  }
}, { timestamps: true })

const Todo = new mongoose.model('Todo', todoSchema)
module.exports = Todo