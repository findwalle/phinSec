const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

// routes
router.get('/getTasks', 
    todoController.getTasks, 
    (req, res) => {
        console.log('gettask complete')
        console.log(res.locals.allTasks)
        return res.status(200).json(res.locals.allTasks);
});

router.post('/addTask',
    todoController.addTask,
    (req, res) => {
        return res.status(200).json(res.locals.addTask)
    })

router.delete('/deleteTask', 
    todoController.deleteTask,
    (req, res) => {
        return res.status(202).json(res.locals.deleteTask)
    })

router.patch('/editTask', 
    todoController.editTask,
    (req, res) => {
        return res.status(200).json(res.locals.editTask)
    })

router.patch('/markComplete', 
    todoController.markComplete,
    (req, res) => {
        return res.status(200).json(res.locals.markComplete);
    })

module.exports = router;