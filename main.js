const express = require('express')
const app = express();
const Port =3000

app.set('view engine','ejs')
app.use(express.static(__dirname+'/public'))
app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/contact",(req,res)=>{
    res.render('contact')
})

app.get("/post",(req,res)=>{
    res.render('post')
})

app.listen(Port,()=> {
    console.log(`server is running on http://localhost:${Port}`)
})