const express = require('express')
const cmh = express.Router()
const Bread = require('../models/data')


cmh.get('/',(req,res)=>{
   res.render('Home')
})





// Indivauyal Orders 
// cmh.get('/id', (req, res) => {
//     res.send(Bread[req.params.arrayIndex])
//   })
  
module.exports = cmh