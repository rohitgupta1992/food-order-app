const express = require('express');
const mongoose = require('mongoose')
 const app = express()
//  const {AdminRoute ,VandorRoute}= require('./routes');
const AdminRoute = require('./routes/AdminRoute')
const VandorRoute = require('./routes/VandorRoute')
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use('/admin',AdminRoute)
app.use('/vandor',VandorRoute)
mongoose.connect('mongodb://localhost:27017/online_food_delivery').then(()=>{
   console.log("Db connected ")
   }).catch(err=>{
      console.log(err)
})
// app.use('/vandor',VandorRoute)
 app.listen(4000,()=>{
    console.log('server is runnin on port 4000')
 })