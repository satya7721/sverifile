import {addSubmit,findSub,findSubById,findPdfById,addMarks,findPdfAll}  from '../controller/submitController.js';

import multer from 'multer';
import mongoose from 'mongoose';

import {File} from '../models/file.js';
 
import {Submit} from '../models/submitModel.js';
 

const Sub = mongoose.model('submit',Submit);
const fileM = mongoose.model('filem',File);
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
    },
  })
  const uploadStorage = multer({ storage: storage })


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

    app.route('/allpdf')
    .get(findPdfAll);

    //add marks
    app.route('/marks/:id')
    .put(addMarks);

  


  // uploading PDF with name given by 
    app.post("/upload", uploadStorage.single("file"), (req, res) => {
        console.log(req.file.originalname)
     

        const {id,check,remark,obtainedmark,outofmark,mailed} = req.body;
        console.log(req.body);
      const filename = req.file.originalname;
        let newSub = new fileM({
           id,
           filename,
           check,
           remark,
           obtainedmark,
           outofmark,
           mailed

        });
    
        newSub.save((err,submitData)=>{
            if(err){
                console.log(err,"in upload route..!")
                res.send(err);
            }
    
            res.json(submitData);
        })
         
      })
      
      
      
}


export default route;










 