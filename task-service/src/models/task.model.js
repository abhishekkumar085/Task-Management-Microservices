const monggoose = require('mongoose');

const taskSchema = new monggoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
    user_id: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now },
}, {
    timestamps: true
})




const Task = monggoose.model('Task', taskSchema);

module.exports = Task;