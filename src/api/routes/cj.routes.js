const express = require('express')
const cjController = require('../controllers/cj.controller')

const router = express.Router()

// * GET - /api/sarah - Fetch all of sarah's records
router.get('', cjController.fetch)


module.exports = router