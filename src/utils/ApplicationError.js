const ErrorCodes = require('../utils/ErrorCodes')

// ? Use this class to create consistent error details
class ApplicationError extends Error {
  // * Default values will construct a Server error
  constructor(errors = [], statusCode = 500, errorCode = ErrorCodes.SERVER_ERROR) {
    super()
    Error.captureStackTrace(this, this.constructor)
    this.statusCode = statusCode
    this.errorCode = errorCode
    this.errors = errors
  }
}

module.exports = ApplicationError