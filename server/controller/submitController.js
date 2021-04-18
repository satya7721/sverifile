import mongoose from 'mongoose';
import multer from 'multer';
import {Submit} from '../models/submitModel.js';
import { v4 as uuidv4 } from 'uuid';

 

const Sub = mongoose.model('submit',Submit);

export const addSubmit = (req,res)=>{
    const {name,mail,mode,year,division,roll,subject} = req.body;
    console.log(req.body);
const id =  uuidv4();
    let newSub = new Sub({
        id,
        name,
        mail,
        mode,
        year,
        division,
        subject
    });

    newSub.save((err,submitData)=>{
        if(err){
            console.log("_________________error_+++++++++")
            res.send(err);
        }

        res.json(submitData);
    })
}


export const findSub = (req,res)=>{

    Sub.find({},(err,submitData)=>{
        if(err){
            res.send(err);
        }

        res.json(submitData);
    })
}


export const findSubById = (req,res)=>{

    Sub.findById(req.params.subid,(err,submitData)=>{
        if(err){
            res.send(err);
        }

        res.json(submitData);
    })
}
 