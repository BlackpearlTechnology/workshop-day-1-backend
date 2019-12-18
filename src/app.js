const express = require('express')
const cors = require('cors')
const db = require('./db/mongoose')
const videosRoutes = require('./api/routes/videos.routes')
const sarahRoutes = require('./api/routes/sarah.routes')
const simounRoutes = require('./api/routes/simoun.routes')
const cjRoutes = require('./api/routes/cj.routes')
const daunRoutes = require('./api/routes/daun.routes')
const kyleRoutes = require('./api/routes/kyle.routes')
const ErrorCodes = require('./utils/ErrorCodes')
const ApplicationError = require('./utils/ApplicationError')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// ? Handle JSON error
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return next(
      new ApplicationError(
        [{ msg: 'Invalid JSON payload' }],
        401,
        ErrorCodes.INVALID_PAYLOAD_ERROR
      )
    )
  }
  next()
})

// ? Routes
app.use('/api/videos', videosRoutes)
app.use('/api/sarah', sarahRoutes)
app.use('/api/simoun', simounRoutes)
app.use('/api/cj', cjRoutes)
app.use('/api/kyle', kyleRoutes)
app.use('/api/daun', daunRoutes)

// ? Catch unknow nURIs
app.use((req, res, next) => {
  return next(
    new ApplicationError(
      [{ msg: 'Invalid endpoint' }],
      404,
      ErrorCodes.INVALID_ENDPOINT_ERROR
    )
  )
})

// ? Error handler
app.use((error, req, res, next) => {
  res.status(error.statusCode).send({ error })
  next()
})

// ? Connect to MongoDB
db.connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Unable to connect ot MongoDB'))

module.exports = app
