import mongoose from 'mongoose';

const Schema = mongoose.Schema;
 

export const Teacher = new Schema({
 
        name:{
            type:String
        },
        mail:{
            type:String
        },
        password:{
            type:String
        }
});
