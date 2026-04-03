const express = require('express')
const upload = require('../../config/multer')
const { updateProfilePic, updateResume } = require('./profile.controller')
const router = express.Router()

router.put('/profile-pic',upload.single("image") ,updateProfilePic)
router.put('/resume',upload.single("resume") ,updateResume)

module.exports = router