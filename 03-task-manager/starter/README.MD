## Project Setup

In order to run the project, setup .env and set MONGO_URI variable equal to DB connection string.

In order to avoid port collisions, in the source code port value is 5000

## Routes
app.get('/api/v1/tasks')    - get all the tasks
app.post('/api/v1/tasks')    - create a new task
app.get('/api/v1/tasks/:id')    - get single tasks
app.patch('/api/v1/tasks/:id')    - update task
app.delete('/api/v1/tasks/:id')    - delete task
