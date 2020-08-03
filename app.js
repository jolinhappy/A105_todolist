const express = require('express')

const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3000

const routes = require('./routes')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

require('./config/mongoose')



app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`)
})