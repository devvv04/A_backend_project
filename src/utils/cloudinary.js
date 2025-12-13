import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'df5nh5w8c', 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

   //upload fucntion 
   export const uploadtocloudinary = async(filepath) =>{
    try{
if(!filepath) return;
const result = await cloudinary.uploader.upload(filepath,{
    resource_type : 'auto',
})
//after upload succesfull show the url in console:
console.log("File uploaded succesfully",result.url);
return result;

}catch(error){
//delete the file from local storage after error:
fs.unlinkSync(filepath);
return null;
    }
}

export {uploadtocloudinary}
   