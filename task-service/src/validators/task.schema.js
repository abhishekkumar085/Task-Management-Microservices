const { z } = require('zod');

const createTaskSchema = z.object({
    title: z.string().min(1, "Name is required"),
    description: z.string().optional(""),
    user_id: z.string().min(1, "User ID is required"),
    status: z.enum(['pending', 'in-progress', 'completed']).optional()

})

module.exports = {
    createTaskSchema
};