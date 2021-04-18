import {addSubmit,findSub,findSubById}  from '../controller/submitController.js';

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
    app.route('/list')
  

    .post(addSubmit)
    .get(findSub);

    app.route('/list/:subid')
    .get(findSubById);

  
 
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
                console.log("_________________error_+++++++++")
                res.send(err);
            }
    
            res.json(submitData);
        })
         
      })
      
      
      
}


export default route;










 