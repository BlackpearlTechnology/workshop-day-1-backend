const express = require('express')
const cjController = require('../controllers/cj.controller')

const router = express.Router()

// * GET - /api/cj- Fetch all of cj's records
router.get('', cjController.fetch)

module.exports = router


