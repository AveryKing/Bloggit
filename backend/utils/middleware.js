const errorHandler = (error, request, response, next) => {

    if(response.error === 'invalid token') {
        return response.status(401).json({
            error:'invalid token'
        })
    }
    else if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    } else if (error.name === 'JsonWebTokenError') {
        console.log('MIDDLEWARE CATCHING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        return response.status(401).json({
            error: 'invalid token'
        })
    }

    next(error)
}

module.exports = {
    errorHandler
}