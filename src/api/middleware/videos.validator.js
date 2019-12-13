const { body, query, param } = require('express-validator')

module.exports.validate = method => {
  switch (method) {
    case 'create': {
      return [
        body('title').trim().not().isEmpty()
          .withMessage('Title field is required')
          .isLength({ min: 4, max: 25 })
          .withMessage('The title field must be between 4 - 25 characters'),
        body('description').trim().not().isEmpty()
          .isLength({ max: 255 })
          .withMessage('Content field must not be more than 255 characters'),
        body('uploader').trim().not().isEmpty()
          .isLength({ max: 255 })
          .withMessage('Uploader field must not be more than 255 characters')
      ]
    }
  }
}