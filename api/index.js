require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User.js')
const app = express()

app.use(express.json()) // without using this data won't converted in json format and can't be shown as well

app.use(cors({
    credentials: true,
    origin:'http://localhost:5173'
}))

mongoose.connect(process.env.MONGO_URL)

app.post('/register',async (req,res) =>{
    try{
      const {name,email,password} = req.body
      const UserDoc = await User.create({
        name,
        email,
        password,
      })

      res.json(UserDoc)
    
    }catch(e){
      let message = 'The credentials have been used before and the error is : '+ e
      res.json(message)
      
    }
})


app.get('/test',(req,res) =>{
    res.json('')
});

app.listen(4000)


// Listen for the open event
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

// Listen for the error event
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
