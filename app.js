const express = require('express')
const app = express()
const port = 3000
const generateWords = require('./generate_words')


const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})


app.post('/', (req, res) => {
  const options = req.body
  const result = generateWords(options)
  res.render('index', { result: result, options: options })
})




app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})