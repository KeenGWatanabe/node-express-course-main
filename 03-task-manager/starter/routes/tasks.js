const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
    res.send('all items')
})

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
