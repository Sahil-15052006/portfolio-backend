const bycript = require('bcryptjs');

const decriptedPassword = async (password, hashedPassword) => {
    const isMatch = await bycript.compare(password, hashedPassword);
    console.log(isMatch);
    return isMatch;
};

module.exports = decriptedPassword ;