import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sujalbindra:bindra22sahab@cluster0.bgljwz3.mongodb.net/food-del').then(()=>console.log("db connected"));
}