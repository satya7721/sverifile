import mongoose from 'mongoose';

import {Submit} from '../models/submitModel.js';
import {File} from '../models/file.js';
import {Teacher} from '../models/teacher.js';
import path from 'path'
import AdmZip from 'adm-zip' 
import fs from 'fs'
const FileM = mongoose.model('file',File);

const Sub = mongoose.model('submit',Submit);
const T = mongoose.model('teacher',Teacher);

 


export const addSubmit = (req,res)=>{
    const {name,mail,mode,year,division,roll,subject} = req.body;
     const fileid = req.body.id;
      
    let newSub = new Sub({
        fileid,
        name,
        mail,
        mode,
        year,
        division,
        subject,
        roll
    });

    newSub.save((err,submitData)=>{
        if(err){
            console.log(err)
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

    Sub.updateOne({fileid:req.body.id},
        {
            obtainedmark:req.body.ob,
            outofmark:req.body.outm,
            check:true
        },(error,data)=>{
            if(error){
                res.send(false);
            }else{
                res.send(data)
            }
        }
    )
     

}


export const findPdfAll = (req,res)=>{
     
    Sub.find({subject:req.query.subject},(err,submitData)=>{
        if(err){
            res.send([ ]);
            
        }

        res.json(submitData);
    })
}

export const TeacherLogin = (req,res)=>{
 

    T.find({mail:req.body.mail},(err,submitData)=>{
        if(err){
            console.log("_________________error_+++++++++")
            res.send(err);
        }
        if(!submitData.length){
            res.send(false)
        }else{
       if(submitData[0].mail.localeCompare(req.body.password)){

        res.json(submitData[0].name);
       }else{
           res.send(false)
       }
    }

    })

    
}




export const Download = async (req,res)=>{
    const zip = new AdmZip(); 
    console.log(path.basename)
    
    const p = "./uploads/"
    try {
         
        console.log("YES")
        const files = await fs.promises.readdir( './uploads' );
        for( const file of files ) {
            zip.addLocalFile("./uploads/"+file); 
        }
        for( const file of files ) {
            fs.unlinkSync(p+file)
        }
       
      } catch(err) {
        console.error(err)
      }
    Sub.deleteMany().then(()=>{
    const downloadName = `${Date.now()}.zip`; 
    const data = zip.toBuffer(); 
    res.set('Content-Type','application/octet-stream'); 
    res.set('Content-Disposition',`attachment; filename=${downloadName}`); 
    res.set('Content-Length',data.length); 
    res.send(downloadName); 
    }).catch(()=>{
        res.send(false);
    })

}
 