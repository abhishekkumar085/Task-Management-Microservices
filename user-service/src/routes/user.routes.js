const express = require('express');
const validateRequestBody = require('../middlewares/validate-request-body.js');
const router = express.Router();

const userController = require('../controllers/user.controller.js');
const { createUserSchema } = require('../validators/user.schema.js');

router.post('/users', validateRequestBody(createUserSchema), userController.createUser);
router.get('/users', userController.getAllUser);


module.exports = router;