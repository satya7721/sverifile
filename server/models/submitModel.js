import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const Submit = new Schema({
    fileid:{
        type:String,
        required:"Error in id creation"
    },
    name:{
        type:String,
        required:"Enter name",
       
    },
    mail:{
        type:String,
        required:"Enter your mail"
    },
    mode:{
        type:String,
        default:"ISE"
    },
    year:{
        type:String,
        default:"FE"
    },
    division:{
        type:String,
        default:"A"
    },
    subject:{
        type:String,
        default:"CPP"
    },
    check:{
        type:Boolean,
        default:false
    },
    remark:{
        type:String,
        default:"none"
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
    },
    date:{
        type:Date,
        default:Date.now()
    },
    roll:{
        type:String,
        default:0
    }

});
