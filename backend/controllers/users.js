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

module.exports = usersRouter

