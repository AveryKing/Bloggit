const mongoose = require('mongoose')

const url = 'mongodb+srv://fullstack:fullstack@cluster0.qynol.mongodb.net/blog-app?retryWrites=true&w=majority'
mongoose.connect(url)


const notificationSchema = new mongoose.Schema({
    notificationType: String,
    notificationData: Object,
    userFrom:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    userTo:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

})

notificationSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Notification', notificationSchema)