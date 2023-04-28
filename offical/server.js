// DEPENDENCIES
const express = require('express')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => {
  res.send('Up and Running')
})
// // 404 Page
// app.get('*', (req, res) => {
//   res.send('Wrong page homie')
// })

// CMH
const cmh_controller = require('./controllers/cmh_controller.js')
app.use('/cmh', cmh_controller)


// LISTEN
app.listen(PORT, () => {
 
  console.log('listening on port', PORT);
})
