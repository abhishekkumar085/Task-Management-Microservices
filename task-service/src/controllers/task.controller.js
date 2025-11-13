const Task = require("../models/task.model");
const { channel } = require("../utils/rabitmq");

async function createTask(req, res) {
    try {
        const { title, description, user_id } = req.body || {};

        const response = await Task.create({ title, description, user_id });
        const message = {
            task_id: response._id,
            title: response.title,
            description: response.description,
            user_id: response.user_id,
            status: response.status
        }
        if (!channel) {
            return res.status(500).json({ success: false, message: "Failed to create task, channel not found" });
        }
        channel.sendToQueue("task_created", Buffer.from(JSON.stringify(message)));

        return res.status(201).json({ success: true, message: "Task created successfully", data: response });

    } catch (err) {
        console.log('error while creating task', err);
        return res.status(500).json({ success: false, message: "Failed to create task", error: err.message });

    }
}
async function getAllTasks(req, res) {
    try {
        const response = await Task.find({});
        return res.status(200).json({ success: true, message: "Task fetched successfully", data: response });

    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to fetched task", error: err.message });

    }
}

module.exports = {
    createTask,
    getAllTasks
};