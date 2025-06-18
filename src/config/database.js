import Mongoose from 'mongoose'

export const connect = async ()=>{
    await Mongoose.connect('mongodb://127.0.0.1:27017/twitter').then(()=>{
        console.log("Successfully run mongo")
    }).catch((error)=>{
        console.log("Throw error", error);
    })
}
