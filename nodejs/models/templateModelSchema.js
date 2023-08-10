import mongoose from "mongoose";


const templateModelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    imageUpload: {
        type: String,
        require: true
    },
    imageUploadBackgroud: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    chooseColor: 
    {
        type: String,
        require: true
    }
},

    { timestamps: true }
)

export default mongoose.model('TemplateModel', templateModelSchema)