const User = require("../models/userModel");



// @desc    Register a new user
const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.create({
            username,
            password
        });
        console.log(user);
        res.status(201).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}



module.exports = { registerUser }