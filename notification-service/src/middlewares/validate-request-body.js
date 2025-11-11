const { ZodError } = require("zod");

const validateRequestBody = (schema) => {
    return async (req, res, next) => {
        try {
            req.body = await schema.parseAsync(req.body);
            next();

        } catch (error) {
            console.log('errrrrrr', error);

            if (error instanceof ZodError) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid request body",
                    errors: error?.errors?.map((err) => ({
                        path: err.path.join("."),
                        message: err.message,
                    })),
                });
            }

            return res.status(500).json({
                success: false,
                message: "Something went wrong during validation",
                error: error instanceof Error ? error.message : error,
            });
        };
    }
}

module.exports = validateRequestBody;