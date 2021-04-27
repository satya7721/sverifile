import mongoose from 'mongoose';

const Schema = mongoose.Schema;
 

export const File = new Schema({
    id:{
        type:String,

    },
    filename:{
        type:String,
        default:"notfound.pdf"
    }

   
}, { timestamps: true });
