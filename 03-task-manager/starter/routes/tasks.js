const express = require('express')
const router = express.Router()
// const tasks = require('./routes/tasks')


const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
  } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
// :id is a param
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router



// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)