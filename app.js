const express = require("express")
const path = require('path')
const app = express()

const aboutMe = {
    name: "Mohammed",
    age: 27
}

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res)=>{
    res.send("<h1>Hi my name is Mohammed</h1>")
})

app.get("/mohammed", (req, res)=>{
    console.log("I'm learning express.js")
    
})

app.get("/aboutMe", (req, res)=>{
    res.send(aboutMe)
    
})

app.get("/hobbies", (req, res)=>{
    res.send({hobby1: "anime", hobby2:"coding", hobby3: "gym"})
})

console.log(__dirname)

app.listen(3000 , ()=>{
    console.log("listening on port 3000")
})