import mongoose from 'mongoose';

const Schema = mongoose.Schema;
 

export const File = new Schema({
    id:{
        type:String,

    },
    filename:{
        type:String,
        default:"notfound.pdf"
    },
    check:{
        type:Boolean,
        default:false
    },
    remark:{
        type:String,
        default:"Great"
    },
    obtainedmark:{
        type:Number,
        default:0
    },
    outofmark:{
        type:Number,
        default:0
    },
    mailed:{
        type:Boolean,
        default:false
    }

   
}, { timestamps: true });
