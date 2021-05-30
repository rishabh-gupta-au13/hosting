const express=require("express");
const mongoose=require("mongoose")
const app = express()
const PORT =process.env.PORT || 3000
const connectDB = require('./DB/conn')
connectDB()


// to convert json in string
app.use(express.json());

// to convert form data 
app.use(express.urlencoded({ extended: false }))

const loginroutes = require('./Routes/register')


// for custom log in
app.use('/', loginroutes);



app.get("/healthcheck",()=>{
    resizeBy.send("this is health check")

})


app.listen(PORT,()=>{
    console.log(`listening to localhost ${PORT}`)
})