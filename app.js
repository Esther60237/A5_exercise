const express = require('express')
const app = express()
const port = 3000
const generateWords = require('./generate_words')
const helper = require('./helper.js')


const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})


app.post('/', (req, res) => {
  const option = req.body.option
  console.log(option)
  const result = generateWords(option)
  res.render('index', { result, option })
})




app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})