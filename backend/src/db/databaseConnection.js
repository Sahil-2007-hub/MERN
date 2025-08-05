import mongoose from 'mongoose';
const DB_Name = "mern-blog";

const connectDB = async() => {
    try{
      const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
      console.log("mongodb connected successfully");
    } catch(error) {
        console.log("mongodb error", error);
    }
}

export default connectDB;