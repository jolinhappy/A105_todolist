const express = require('express')

const methodOverride = require('method-override')
const app = express()
const port = 3000

const routes = require('./routes')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

require('./config/mongoose')



app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// const Todo = require('./models/todo')

// app.get('/todos/new', (req, res) => {
//   return res.render('new')
// })//省略return看看

// app.post('/todos', (req, res) => {
//   const name = req.body.name
//   return Todo.create({ name })
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })

// app.get('/todos/:id', (req, res) => {
//   const id = req.params.id
//   return Todo.findById(id)
//     .lean()
//     .then((todo) => res.render('detail', { todo }))
//     .catch(error => console.log(error))
// })

//連進修改頁面直接套入原本的內容
// app.get('/todos/:id/edit', (req, res) => {
//   const id = req.params.id
//   return Todo.findById(id)
//     .lean()
//     .then((todo) => res.render('edit', { todo }))
//     .catch(error => console.log(error))
// })

// app.put('/todos/:id', (req, res) => {
//   const id = req.params.id
//   const { name, isDone } = req.body
//   return Todo.findById(id)
//     .then(todo => {
//       todo.name = name
//       todo.isDone = isDone === 'on'
//       return todo.save()
//     })
//     .then(() => res.redirect(`/todos/${id}`))
//     .catch(error => console.log(error))
// })

// app.delete('/todos/:id', (req, res) => {
//   const id = req.params.id
//   return Todo.findById(id)
//     .then(todo => todo.remove())
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })

app.listen(port, () => {
  console.log('OK')
})