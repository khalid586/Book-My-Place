const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const app = express()
require('dotenv').config()

app.use(express.json()) // without using this data won't converted in json format and can't be shown as well

app.use(cors({
    credentials: true,
    origin:'http://localhost:5173'
}))

mongoose.connect(process.env.MONGO_URL)

app.post('/register',(req,res) =>{
    const {name,email,password} = req.body
    res.json({name,email,password})
})

app.get('/test',(req,res) =>{
    res.json('')
});

app.listen(4000)

// 