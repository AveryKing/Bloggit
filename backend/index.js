const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const jwt = require('jsonwebtoken')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const Post = require('./models/post')
const User = require('./models/users')
const SECRET = 'SEC)8woe3c9hrq8x58(pmq3+iyh$@k(+pk&5_n136a#s&95f6_y^@RET'
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
const middleware = require('./utils/middleware')
app.use(middleware.errorHandler)


const connStr = 'mongodb+srv://fullstack:fullstack@cluster0.qynol.mongodb.net/blog-app?retryWrites=true&w=majority'

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

usersRouter.get('/', async (request,response) => {
    const users = await User.find({})
    response.json(users.map(u => u.toJSON()))
})

app.get('/api/posts', (request,response) => {
    mongoose.connect(connStr)
    Post.find({}).then(posts => {
        response.json(posts)
    })
})

app.post('/api/posts', async (request,response) => {
    const body = request.body
    //const user = await User.findById(body.userId)

    const token = getTokenFrom(request)

    let decodedToken = undefined
    try {
        decodedToken = jwt.verify(token, SECRET)
    } catch (error) {
        // throw error when it fails to decode and is bad token4
        return response.status(401).json({
            error:"invalid token"
        })//what a great idea!!!
    }


    if(!token || !decodedToken.id) {
        return response.status(401).json({
            error:'token missing or invalid'
        })
    }
    const user = await User.findById(decodedToken.id)
    /*let user
    if(body.author === 'Anonymous') {
         user = await User.findByIdAndUpdate("61b5309e559d0052cc78c2a7")
    } else {
         user = await User.findByIdAndUpdate("61b530b2559d0052cc78c2c0")
    }*/

    if(!body.content || !body.title || !body.author) {
        return response.status(400).json({error:"invalid parameters"})
    }

    if(body.content.length < 150) {
        return response.json({error:"post length must be at least 150 characters"})
    }

    if(body.title.length < 5) {
        return response.json({error:"post title must be at least 5 characters"})
    }

    const post = new Post({
        title:body.title,
        content:body.content,
        author:body.author,
        user: user._id,
        score:0
    })

    await post.save().then(savedPost => {
        user.posts = user.posts.concat(savedPost.id)
        user.save((error) => {
            console.log(error)
        })
        response.json(savedPost)
    })

})
app.get('/api/posts/:id', (request,response) => {
    Post.findById(request.params.id).then(post => {
        response.json(post)
    }).catch(err => {
        response.status(404).json({error: "invalid post id"})
    })
})



const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

