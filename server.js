import express from 'express'
import { connect } from "mongoose";
import personRouter from './routes/PersonRouter.js';
import menuRouter from './routes/menuRouter.js';
// import bodyParser from 'body-parser';
const app= express()
// app.use(bodyParser.json())
const database_URI= "mongodb://localhost:27017/hotels"
connect(database_URI).then(()=>console.log('db connected'))
app.use(express.json())
app.use('/person',personRouter)
app.use('/menu',menuRouter)
app.listen(3000,()=>{
    console.log(`Server is running`)
})