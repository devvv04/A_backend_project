//way1: try,catch:
/*
const asyncHandler = (requestHandler) = async (req,res,next)=>{
try{
    await requestHandler(req,res,next);
}
catch(err){
res.status(err.code || 500).json ({
    success : false,
    message : err.message || "Internal Server Error"
})
}}
*/

//way2: usig promise:

const asyncHandler = (requestHandler) => (req, res, next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err));
}

export default asyncHandler;