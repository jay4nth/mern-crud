import mongoose from "mongoose";

const carSchema=mongoose.Schema({
    company:{
        type:String,
        required: true,
    },
    model:{
        type:String,
        required: true,
    },
    year:{
        type:Number,
        required: true
    },
},
{
    timestamps:true
});

export const Car = mongoose.model('Car', carSchema);