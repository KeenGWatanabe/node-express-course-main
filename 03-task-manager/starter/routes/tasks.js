const express = require('express')
const router = express.Router()
// const tasks = require('./routes/tasks')


const {getAlLTasks, getAllTasks} = require('../controllers/tasks')

router.route('/').get(getAllTasks)

module.exports = router

// const {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
//   editTask,
// } = require('../controllers/tasks')

// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
