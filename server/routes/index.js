module.exports = (app) => {
  app.get('/', (req, res) => res.send('洛奇后端'))

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
