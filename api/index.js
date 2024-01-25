const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User.js');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader'); 
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const PlaceModel = require('./models/place.js');


require('dotenv').config();
app.use(express.json()) // without using this data won't converted in json format and can't be shown as well
app.use(cookieParser())
app.use('/uploads',express.static(__dirname+'/uploads'));

app.use(cors({
    credentials: true,
    origin:'http://localhost:5173'
}))

mongoose.connect(process.env.MONGO_URL)

// Validation middleware
const validateRegistration = [
  body('name').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Invalid email').notEmpty().withMessage('Email is required'),
  body('password').isLength({ min: 2 }).withMessage('Password must be at least 2 characters'),


  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateLogin = [
  body('email').isEmail().withMessage('Invalid Email').notEmpty().withMessage('Email is required'),
  body('password').isLength({ min: 2 }).withMessage('Password is at least 2 characters'),


  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
]

app.post('/register',validateRegistration,async (req,res) =>{
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

app.post('/login', validateLogin,async (req,res) => {
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
      res.status(422).json(result + ' but ' + 'Password is wrong!')
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

app.post('/upload-by-link', async(req,res) =>{
  const{link} = req.body;

  try{
    const newName = 'photo'+ Date.now() + '.jpg';
    await imageDownloader.image({
      url:link,
      dest: __dirname+ '/uploads/' + newName,
    });
    
    res.json(newName);
  }
  catch(e){
    console.log(e)
  }

})

app.post('/places', (req,res) =>{
  const {token} = req.cookies;
  const{
    title,address,addedPhotos,description,
    checkIn,checkOut,maxGuests,
  } = req.body;
  
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      // if (err) throw err;
     const placeDoc = await PlaceModel.create({
      title,address,addedPhotos,description,
      checkIn,checkOut,maxGuests,
    });
    res.json(placeDoc);
  });

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
 