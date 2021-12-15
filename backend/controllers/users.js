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

module.exports = usersRouter

