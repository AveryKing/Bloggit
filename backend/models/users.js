const mongoose = require('mongoose')
//const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    username: {
        type: String,
      //  unique: true
    },
    passwordHash: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Post'
        }
    ],
    notifications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Notification'
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: this
        }
    ],
    outgoingFriendRequests: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: this
        }
    ],
    incomingFriendRequests: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: this
        }
    ]
})

//userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User