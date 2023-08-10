import mongoose from "mongoose";

const layoutSchema = new mongoose.Schema({
    profilePhoto: { 
        type: String,
        required:false
    }, 
    profilePhotoPath: {
        type: String,
        required:false
    }, 
    layoutName: {
        type: String,
        required: false
    },
    socialMedia: [{
        name: {
            type: String,
            required:false
            
        },
        link: {
            type: String,
            required:false
            
        }
    }],
    profileLink1: {
        name: {
            type: String,
            required:false
            
        },
        url: {
            type: String,
            required:false
            
        }
    },
     profileLink2: {
        name: {
            type: String,
            required:false
            
        },
        url: {
            type: String,
            required:false
            
        }
    },
     profileLink3: {
        name: {
            type: String,
            required:false
            
        },
        url: {
            type: String,
            required:false
            
        }
    },

  
});

export default mongoose.model('layouts', layoutSchema);
