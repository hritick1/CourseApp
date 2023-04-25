const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const routes=require('./routes');
const cors=require('cors');
const cookieParser=require('cookie-parser');

dotenv.config();

mongoose.connect(process.env.DB,{dbName:"CourseApp"});

app.use(cors());

app.use(cookieParser());
app.use(express.json());

app.use('/',routes);

app.listen(3000,()=>console.log('Server is Running'));