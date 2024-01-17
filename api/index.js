require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User.js')
const app = express()
const jwt = require('jsonwebtoken');
const CookieParser = require('cookie-parser')


app.use(express.json()) // without using this data won't converted in json format and can't be shown as well
app.use(CookieParser())

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
      res.status(422).json(message)
      
    }
})


const jwtSecret = 'tiowerijwedfnsdiofhsdfmsdfklj'

app.post('/login', async (req,res) => {
  const {email,password} = req.body;
  const userDoc = await User.findOne({email})

  if(userDoc){
    const result = 'Email found';
    const passOk = (password == userDoc.password ? 1:0)

    if(passOk){
      jwt.sign({email:userDoc.email,id:userDoc._id},jwtSecret,{},(err,token) =>{
        if(err) throw err;
        res.cookie('token',token).json(userDoc)
      })

    //  res.json(result + ' and ' + 'Pass is right!')
    }else{
      res.status(422).json(result + ' but ' + 'Pass is wrong!')
    }
  }
  else{
    
    res.status(422).json('Email Not found')
  }
})

app.post('/logout', (req,res) => {
  res.cookie('token', '').json(true);
});

app.get('/profile',(req,res)=>{
  const {token} = req.cookies;
  if(token){
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const {name,email,_id} = await User.findById(userData.id);
      res.json({name,email,_id});
    });
  }
  else{
    res.json('null')
  }

 // res.json('just checking profile')
  
})

const port = 4000;


app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World, just checking!');
});

app.get('/test',(req,res) =>{
  res.send('this is test')
});

// Listen for the open event
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

// Listen for the error event
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
