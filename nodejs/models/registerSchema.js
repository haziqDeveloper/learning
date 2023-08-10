import mongoose from "mongoose";


const registerSchema = new mongoose.Schema({
 
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    domain:{
        type: String,
        require: true
    }
},

    { timestamps: true }
)

export default mongoose.model('regUser', registerSchema)