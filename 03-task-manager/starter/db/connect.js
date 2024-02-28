const connectionString = "mongodb+srv://Rger:<asdf>@atlascluster.e1g1exp.mongodb.net/"
const mongoose = require('mongoose')

// need to put your mongoDB url here.
const connectDB = (url) => {
return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
}

module.exports = connectDB
