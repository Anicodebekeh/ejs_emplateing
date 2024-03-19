const express = require("express");
const app = express()
const ejs =require("ejs")

app.set('view engine', ejs)

app.get('/home', (req, res)=>{
    // res.send("hey i am here in the template")
    res.render('home.ejs')
})


app.listen(8080, ()=>{
    console.log("listening ")
})