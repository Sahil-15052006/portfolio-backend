const mongoose = require('mongoose')

const ProfileSchema = mongoose.Schema(
    {
        profilePicURL:{
            type:String,
        },
        resumeURL:{
            type:String,
        },
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Profile",ProfileSchema)