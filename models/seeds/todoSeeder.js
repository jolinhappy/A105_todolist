const Todo = require('../todo')
mongoose.connect('mongodb://localhost/todo-list-new', { useNewUrlParser: true, useUnifiedTopology: true })
const db = require('../../config/mongoose')

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!~~')
  for (let i = 0; i < 10; i++) {
    Todo.create({
      name: 'name-' + i
    })
  }
  console.log('done!')
})