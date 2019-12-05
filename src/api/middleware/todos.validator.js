const { body, query, param } = require('express-validator')

module.exports.validate = method => {
  switch (method) {
    case 'create': {
      return [
        body('title').trim().not().isEmpty()
          .withMessage('Title field is required')
          .isLength({ min: 4, max: 25 })
          .withMessage('The title field must be between 4 - 25 characters'),
        body('content').trim()
          .isLength({ max: 255 })
          .withMessage('Content field must not be more than 255 characters')
      ]
    }
  }
}