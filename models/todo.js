const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  }

})

module.exports = mongoose.model('Todo', todoSchema)

//這裡的Todo是資料名字，別的地方直接使用Todo