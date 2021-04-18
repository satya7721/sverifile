import mongoose from 'mongoose';

import {Submit} from '../models/submitModel.js';
import {File} from '../models/file.js';
import { v4 as uuidv4 } from 'uuid';

const FileM = mongoose.model('file',File);

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

    Sub.find({subject:req.params.exam},(err,submitData)=>{
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


export const findPdfById = (req,res)=>{

    FileM.find(req.params.subid,(err,submitData)=>{
        if(err){
            res.send(err);
        }

        res.json(submitData);
    })
}



export const addMarks = (req,res)=>{

    FileM.updateOne({_id:req.params.id},
        {
            obtainedmark:req.body.obtainedmark,
            outofmark:req.body.outofmark
        },(error,data)=>{
            if(error){
                res.send(error);
            }else{
                res.send(data)
            }
        }
    )
     

}


export const findPdfAll = (req,res)=>{

    FileM.find({},(err,submitData)=>{
        if(err){
            res.send(err);
        }

        res.json(submitData);
    })
}
