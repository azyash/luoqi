const express = require('express')
const router = express.Router()

//增
router.post('/', async (req, res) => {
  const model = await req.Model.create(req.body)
  res.send(model)
})
//删
router.delete('/:id', async (req, res) => {
  await req.Model.findByIdAndDelete(req.params.id)
  res.send({
    success: true,
  })
})
//改
router.put('/:id', async (req, res) => {
  const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
  res.send(model)
})
//查单个
router.get('/:id', async (req, res) => {
  const model = await req.Model.findById(req.params.id)
  res.send(model)
})
//查全部
router.get('/', async (req, res) => {
  if (req.Model.modelName === 'menu') {
    queryOptions.populate = 'parent'
  }
  const model = await req.Model.find().setOptions(queryOptions)
  res.send(model)
})

module.exports = router
