const Video = require('../models/Video')
const { validationResult } = require('express-validator')
const ApplicationError = require('../../utils/ApplicationError')
const ErrorCodes = require('../../utils/ErrorCodes')

// * FETCH
module.exports.fetch = async (req, res, next) => {
  try {
    const videos = await Video.find()
    res.status(200).send({ videos })
  } catch (err) {
    next(new ApplicationError([{ msg: err.message }]))
  }
}

// * CREATE
module.exports.create = async (req, res, next) => {
  const title = req.body.title
  const description = req.body.description
  const uploader = req.body.uploader

  // ? Validate
  const errors = validationResult(req)
  if (!errors.isEmpty()) return next(new ApplicationError(errors.array(), 422, ErrorCodes.INVALID_INPUT_ERROR))

  const newVideo = new Video({ title, description, uploader })

  try {
    const savedVideo = await newVideo.save()
    res.status(201).send({ video: savedVideo })
  } catch (err) {
    next(new ApplicationError([{ msg: err.message }]))
  }
}


