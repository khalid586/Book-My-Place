const express = require('express')
const app = express()

app.get('/test',(req,res) =>{
    res.json('okay done')
});

app.listen(4000)