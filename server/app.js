const express = require('express')
const app = express()
const port = 3000

require('./models/db.js')
app.use(express.json())

//跨域模块
app.use(require('cors')())

require('./routes')(app)

app.listen(port, () =>
  console.log(`Server running at  http://127.0.0.1:${port}`),
)
