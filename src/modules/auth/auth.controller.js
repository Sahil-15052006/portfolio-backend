const express = require('express');
const User = require('./auth.model');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const bycrpt = require('bcryptjs');

const loginUser = async (req, res) => {
    const { name, password } = req.body;
    console.log(user)
            console.log(name);
            console.log(password);
            // console.log(user.password);
            // console.log(passwordMatched);
    try{ 
        
        const user = await User.findOne({ name });

        if (user){
            const passwordMatched = await bycrpt.compare(password, user.password);
            
            if(passwordMatched){
                const token = jwt.sign(
                    { userId: user._id }, 
                    process.env.JWT_SECRET, 
                    { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).json({
                     message: 'Invalid credentials'
                     });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }catch(err){
        res.status(500).json({ message: 'Server error' });
    }
};

const logoutUser = (req, res) => {
    res.json({ message: 'User logged out successfully' });
};

module.exports = {
    loginUser,
    logoutUser
};