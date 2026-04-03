const express = require('express')
const { getSkills, createSkill, deleteSkill, updateSkill } = require('./skill.controller')
const router = express.Router()

router.get('/',getSkills)
router.post('/',createSkill)
router.delete('/:id',deleteSkill)
router.patch('/:id',updateSkill)

module.exports = router