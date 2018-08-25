const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hello Anis')
})

app.get('/asrul', function(req, res){
    res.send('Hello asrul')
})

app.listen(3000, function(){
    console.log(`Server is running`)
})