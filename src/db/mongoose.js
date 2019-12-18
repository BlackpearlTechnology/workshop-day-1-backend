const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL
mongoose.set('useFindAndModify', false)

module.exports.connect = () =>
  mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
