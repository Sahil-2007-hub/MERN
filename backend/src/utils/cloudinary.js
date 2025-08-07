import { v2 as cloudinary } from 'cloudinary'
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KE, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath) => {
    try{
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log(("File uploded suessfully", response.url));
        
        if(fs.existsSync(localFilePath)) {
            fs.rmSync(localFilePath);
        }
    } catch(error) {
        console.log("Error occur while uploading on cloudinary",error);
        
        if(fs.existsSync(localFilePath)) {
            fs.rmSync(localFilePath);
        }
    }
};

export {uploadOnCloudinary};