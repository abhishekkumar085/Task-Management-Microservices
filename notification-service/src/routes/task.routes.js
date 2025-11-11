const express = require('express');
const validateRequestBody = require('../middlewares/validate-request-body.js');
const { createTaskSchema } = require('../validators/task.schema.js');
const taskController = require('../controllers/task.controller.js');
const router = express.Router();



router.post('/task', validateRequestBody(createTaskSchema), taskController.createTask);
router.get('/tasks', taskController.getAllTasks);


module.exports = router;