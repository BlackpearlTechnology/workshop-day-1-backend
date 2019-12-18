const express = require('express')
const sarahController = require('../controllers/sarah.controller')

const router = express.Router()

// * GET - /api/sarah - Fetch all of sarah's records
router.get('', sarahController.fetch)


module.exports = router
