const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/users')

const SECRET = 'SEC)8woe3c9hrq8x58(pmq3+iyh$@k(+pk&5_n136a#s&95f6_y^@RET'

loginRouter.post('/', async (request,response) => {
    const body = request.body
    const user = await User.findOne({username: body.username})
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash)

    if(!(user && passwordCorrect)) {
        return response.status(401).json({
            error: 'invalid username or password'
        })
    }
    const userForToken = {
        username: user.username,
        id: user._id,
    }

    const token = jwt.sign(userForToken, SECRET)

    response
        .status(200)
        .send({token, username: user.username})
})

module.exports = loginRouter,SECRET