const express = require('express')
const videosController = require('../controllers/videos.controller')
const videosValidator = require('../middleware/videos.validator')

const router = express.Router()

// * GET - /api/videos - Fetch all videos
router.get('', videosController.fetch)

// * POST - /api/videos- Add video
router.post('', videosValidator.validate('create'), videosController.create)

module.exports = router
