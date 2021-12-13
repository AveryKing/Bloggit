const mongoose = require('mongoose')

const url = 'mongodb+srv://fullstack:fullstack@cluster0.qynol.mongodb.net/blog-app?retryWrites=true&w=majority'
console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('Connected to DB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const postSchema = new mongoose.Schema({
    content: String,
    author: String,
    title: String,
    score: Number,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

postSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Post', postSchema)