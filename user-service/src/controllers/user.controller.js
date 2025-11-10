const User = require("../models/user.model");

async function createUser(req, res) {
    try {
        const { name, email, status } = req.body || {};
        if (!name || !email) {
            return res.status(400).json({ success: false, message: "Name and Email are required" });
        }
        const response = await User.create({ name, email, status });
        return res.status(201).json({ success: true, message: "User created successfully", data: response });

    } catch (err) {
        console.log('err', err.code === 11000);
        if (err.code === 11000) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }
        return res.status(500).json({ success: false, message: "Failed to create user", error: err.message });

    }
}
async function getAllUser(req, res) {
    try {
        const response = await User.find({}).sort({ createdAt: -1 });;
        return res.status(200).json({ success: true, message: "User fetched successfully", data: response });

    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to fetched user", error: err.message });

    }
}

module.exports = {
    createUser,
    getAllUser
};