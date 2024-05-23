// require('dotenv').config({path : './env'})

import dotenv from 'dotenv'
import connectDB from './db/index.js';
import express from 'express'

dotenv.config({
    path : './env'
})

connectDB() 
.then( ()=>{
    app.on("error",(error)=>{
        console.log("ERRRR:",error);
        throw error
    })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is runnug : ${process.env.PORT}`);
    })
})
.catch( (err)=>{
    console.log("MONGO db connection failed !!! " ,err);
})







// function connectDB(){}
// connectDB()

//<---------1st approach------------------>
// import express from 'express'
// import { express } from 'express';
const app = express();

// //connect to DB
// ( async ()=>{
//      try{
//       await mongoose.connect(`${process.env.MONGODB_URI}/$
//       {DB_NAME}`)
//       app.on('error',(error)=>{
//         console.log('ERRR',error);
//         throw error
//       })

//     app.listen(process.env.PORT , ()=>{
//         console.log(`App is listenin on port 
//         ${process.env.PORT}`)
//     })

//      }catch(error){
//         console.error("ERROR: ",error)
//         throw err
//      }
// })()       //IIFE ,   database