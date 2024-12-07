import express from 'express'
import dotenv from 'dotenv';
import { connect } from "mongoose";
import personRouter from './routes/PersonRouter.js';
import menuRouter from './routes/menuRouter.js';
// import bodyParser from 'body-parser';
const app= express()
dotenv.config()
const database_URI=process.env.db_url
const PORT= process.env.PORT ||3000

// app.use(bodyParser.json())
connect(database_URI).then(()=>console.log('db connected'))
app.use(express.json())
app.use('/person',personRouter)
app.use('/menu',menuRouter)
app.listen(PORT,()=>{
    console.log(`Server is running`)
})