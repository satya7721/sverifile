
 
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import route from './routes/submitRoutes.js';
 
import path from 'path'
 
const app = express();

// routes
 
app.use(bodyParser.json({limit:"40mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"40mb",extended:true}));

app.use(cors());
app.use(express.json());

const __dirname = path.resolve(path.dirname(''));
app.use('/uploads', express.static( __dirname+'/uploads'))
route(app);

const CONNECTION_URL = "mongodb+srv://satyam:Satyam@123@cluster0.hgusd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ;
const PORT = 4000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`server running at ${PORT}`)))
.catch((error)=>console.log(error.message));

 
mongoose.set('useFindAndModify',false);


app.get('/',(req,res)=>{
    console.log(`ere ${req.originalUrl}`)
    res.send("here we go")
})