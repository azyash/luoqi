const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId },
  bgUrl: { type: String },
  swiperImg: [
    {
      type: String,
      url: String,
    },
  ],
})

module.exports = mongoose.model('base', schema)
