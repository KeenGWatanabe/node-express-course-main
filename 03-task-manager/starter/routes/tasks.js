const express = require('express')
const router = express.Router();


//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

router.route('/').get((req, res) =>{
    res.send('all items')
})


module.exports = router