const bycript = require('bcryptjs');

const hashPassword = async (password) => {
    const salt = await bycript.genSalt(10);
    const hashedPassword = await bycript.hash(password, salt);
    console.log(hashedPassword);
}

module.exports = hashPassword;