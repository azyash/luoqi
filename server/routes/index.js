const { RSA_NO_PADDING } = require('constants')

module.exports = (app) => {
  app.get('/', (req, res) => res.send('洛奇后端'))

  //文件上传
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../uploads' })
  app.post('/upload', upload.single('file'), async (req, res) => {
    const file = await req.file
    file.url = `http://127.0.0.1:3000/uploads/${file.filename}`
    res.send(file)
  })

  //通用接口
  app.use(
    '/api/rest/:model',
    (req, res, next) => {
      const modelName = req.params.model
      req.Model = require(`../models/${modelName}`)
      next()
    },
    require('./rest'),
  )
}
