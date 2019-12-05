const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL
mongoose.set('useFindAndModify', false)

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB running'))
  .catch(error => console.error(error))
