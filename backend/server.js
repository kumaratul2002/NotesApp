require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const nodeRouter = require('./routes/nodeRouter')
const path = require('path')


const app = express();

app.use(express.json())
app.use(cors())

//Routes
app.use('/user',userRouter)
app.use('/api/notes',nodeRouter)


//connection
const dbConnect = require("./config/database");
dbConnect();


//listen server
const PORT = process.env.PORT
app.listen(PORT,()=>console.log(`server is listining on port ${PORT}` ))


