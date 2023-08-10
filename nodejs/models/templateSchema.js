import mongoose from "mongoose";


const templateSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
},

    { timestamps: true }
)

export default mongoose.model('Template', templateSchema)