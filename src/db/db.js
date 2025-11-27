import mongoose from "mongoose";

import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
console.log(`\n MONGO DB Connected!! DB Host: ${connectionInstance.connection.host} \n`);

// console.log(connectionInstance);

    } catch (err){
        console.log("MONGODB connection error",err);
        // process.exit(1);
        throw err;
        
    }
}  

export default connectDB;