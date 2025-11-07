const { z } = require('zod');

const createUserSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    status: z.enum(['active', 'inactive']).optional()
})

module.exports = {
    createUserSchema
};