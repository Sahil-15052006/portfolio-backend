const Skill = require('./skill.model')

const createSkill = async (req,res) => {
    try{
        const {name,type} = req.body
        const newSkill = await Skill.create({
            name,
            type
        })
        res.status(201).json(newSkill)
    } catch(error){
        res.status(500).json({message : "Server error : Failed to create message"})
    }
}

const getSkills = async (req,res) =>{
    try{
        const skills = await Skill.find().sort({createdAt:-1})
        res.status(200).json(skills)
    }catch(error){
        res.status(500).json({message:"Server error : Failed to fetch messages"})
    }
}

const deleteSkill = async (req,res) => {
    try{
        const {id} = req.params
        await Skill.findByIdAndDelete(id)
        res.status(200).json({message:"Skill deleted"})
    }catch(error){
        res.status(500).json({message:"Server error : Failed to delete message"})
    }
}

const updateSkill = async (req,res) => {
    try{
        const {id} = req.params
        const updatedSkill = await Skill.findByIdAndUpdate(
            id,
            req.body,
            {returnDocument:"after"},
        )
        res.status(200).json(updatedSkill,{message:"Skill updated"})
    }catch(error){
        res.status(500).json({message:"Server error : Failed to update skill"})
    }
}

module.exports = {
    createSkill,
    getSkills,
    deleteSkill,
    updateSkill,
}