import multer from 'multer';
// Set up multer storage configuration
const storage = multer.diskStorage({
    // Destination to store image
  destination: function (req, file, cb) {
    // './public/temp' folder will be created for storing temporary files
    
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //null means no error bcz cb have two parameters first is error second is filename
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
}) 
//this will return the filename i.e localpath to be uploaded to cloudinary

export const upload = multer({ storage })