const mongoose=require('mongoose')
const mongoURI="mongodb+srv://chhakudhote22:dBnSDasPGkMV8Pt2@cluster0.ibtfyhy.mongodb.net/"
const connectToMongo=async()=>{
    try{
        mongoose.set('strictQuery',false)
        mongoose.connect(mongoURI)
        console.log("mongo connected")
    }
    catch(error){
        console.log(error)
        process.exit()
    }
}
module.exports=connectToMongo