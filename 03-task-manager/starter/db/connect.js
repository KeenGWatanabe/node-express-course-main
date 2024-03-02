const mongoose = require('mongoose')

const connectionString = "mongodb+srv://rger:asdf@nodeexpressprojects.ttabe7j.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects"

// need to put your mongoDB url here.
const connectDB = (url) => {
return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => console.log('connected to the DB...')).catch((err)=>console.log(err))
}

module.exports = connectDB
