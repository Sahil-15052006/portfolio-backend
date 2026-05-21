const Profile = require('./profile.model')
const {put,del} = require('@vercel/blob')

const updateProfilePic = async (req,res) => {
    try{
        let profileData = await Profile.findOne({
            owner:req.user.userId
        })

        if (!profileData) {
            profileData = await Profile.create({});
        }

        let profilePicURL = profileData.profilePicURL

        if(req.file){
            if(profileData.profilePicURL){
                await del(profileData.profilePicURL,{
                        token:process.env.BLOB_READ_WRITE_TOKEN
                    });
            }

            const filename =  `profile-pic/profile-pic-${Date.now()}`
            
            const blob = await put(
                filename,
                req.file.buffer,
                {
                    access:"public",
                    token:process.env.BLOB_READ_WRITE_TOKEN
                }
            )
            
            profilePicURL=blob.url
        }

        const updated = await Profile.findByIdAndUpdate(
            profileData._id,
            {profilePicURL},
            {new:true}
        )
        res.status(200).json(updated)
    } catch(error){
        res.status(500).json(
           
            {error:error.message}
        )
    }
}

const updateResume = async (req,res) => {
    try{
        let profileData = await Profile.findOne()

        if (!profileData) {
            profileData = await Profile.create({});
        }

        let resumeURL = profileData.resumeURL

        if(req.file){
            if(profileData.resumeURL){
                await del(profileData.resumeURL,{
                        token:process.env.BLOB_READ_WRITE_TOKEN
                    });
            }

            const filename =  `resume/resume-${Date.now()}`
            
            const blob = await put(
                filename,
                req.file.buffer,
                {
                    access:"public",
                    token:process.env.BLOB_READ_WRITE_TOKEN,
                    contentType:"application/pdf"
                }
            )
            
            resumeURL=blob.url
        }

        const updated = await Profile.findByIdAndUpdate(
            profileData._id,
            {resumeURL},
            {new:true}
            
        )
        res.status(200).json(updated)
    } catch(error){
        res.status(500).json(
            {error:error.message}
        )
    }
}

module.exports={
    updateProfilePic,
    updateResume
}
