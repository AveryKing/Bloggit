const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/users')

usersRouter.post('/', async (request, response) => {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        username: body.username,
        passwordHash
    })

    const savedUser = await user.save().catch(error => {
        response.json({error:"that username is taken"})
    })

    response.json(savedUser)
})

usersRouter.get('/:id', async (request,response) => {
    const id = request.params.id

     await User.findById(id).then(user => {
        response.json(user)
    }).catch(err => {
        response.json({error:'user not found'})
     })
})

usersRouter.get('/friends/:id', async (request, response) => {
    const id = request.params.id
    await User.findById(id).then(user => {
        response.json(user.friends)
    }).catch(err => {
        response.json(err)

    })
})

usersRouter.get('/friends/outgoing/:id', async (request, response) => {
    const id = request.params.id
    await User.findById(id).then(user => {
        response.json(user.outgoingFriendRequests)
    })
})

usersRouter.post('/friends/remove', async (request, response) => {
    const user1 = request.body.user1
    const user2 = request.body.user2

    await User.findById(user1).then(user => {
        user.friends.pull(user2)
        user.save().then(async func => {
            await User.findById(user2).then(user => {
                user.friends.pull(user1)
                user.save().then(func => {
                    response.json({"message":"success"})
                })
            })
        })
    }).catch(err => {
        response.json({error:'there was an error with your request'})
    })


})
module.exports = usersRouter

