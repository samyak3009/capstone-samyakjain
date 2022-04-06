const express = require("express")
const app = express();
const mongoose = require("mongoose")

const cors = require("cors")
const helmet = require("helmet")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(helmet())
app.use(cors())

app.use("/users",require("./routes/user"))

app.get("/",(req,res)=>{
    res.send("welcome to the capstone project")
})

app.listen(8000,(e)=>{
    console.log(e)
    mongoose.connect("mongodb://localhost/capstone").then((result)=>{
        console.log("database connected")
    }).catch((e)=>{
        console.log("database failed")
        console.log(e)
    })
})