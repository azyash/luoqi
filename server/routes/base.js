const express = require('express')
const router = express.Router()
const Model = require('../models/base')

//改
router.put('/', async (req, res) => {
  const model = await Model.findOneAndUpdate({ user: userId }, req.body)
  res.send(model)
})

//查
router.get('/', async (req, res) => {
  const model = await req.Model.findOne({ user: userId })
  res.send(model)
})

module.exports = router
