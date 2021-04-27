import {addSubmit,findSub,findSubById,findPdfById,addMarks,findPdfAll,TeacherLogin,Download}  from '../controller/submitController.js';

import multer from 'multer';
import mongoose from 'mongoose';


import { v4 as uuidv4 } from 'uuid';

import {File} from '../models/file.js';
import path from 'path'
import {Submit} from '../models/submitModel.js';
 

const Sub = mongoose.model('submit',Submit);
const FileM = mongoose.model('files',File);
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {

    cb(null, "./uploads"); //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    
    const id =  uuidv4();

    cb(null, id + path.extname(file.originalname));
  },
});
const upload = multer({ storage: fileStorageEngine });
const route = (app)=>{

  
  // adding data 
    app.route('/submit')
    .post(addSubmit);
    

    // getting student submission data
    app.route('/get/:exam')
    .get(findSub);

    // getting submission by id
    app.route('/each/:subid')
    .get(findSubById);

    app.route('/eachpdf/:subid')
    .get(findPdfById);

    app.route('/allpdf/')
    .get(findPdfAll);

    //add marks
    app.route('/marks/')
    .put(addMarks);

    app.route('/upload').post(upload.single("file"), (req, res,next) => {
      try{ 
      let FILE = new FileM({
        filename:req.file.filename
    });
      FILE.save((err,submitData)=>{
        if(err){
            console.log("_________________error_+++++++++")
            res.send(err);
        }

        res.json(submitData);
    })
  }catch{
    res.send("0000-not-ok");
  }

    });


    app.route('/teacherlogin')
    .post(TeacherLogin);
    
    app.route('/zip')
    .get(Download);

    
}



export default route;










 