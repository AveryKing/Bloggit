const notificationsRouter = require('express').Router()
const Notification = require('../models/notification')

notificationsRouter.get('/', (request, response) => {
    response.send('notifications routed!')
})

notificationsRouter.post('/', async (request, response) => {


    const notification = new Notification({
        notificationData: {type:request.body.notificationType},
        userFrom: request.body.userFrom,
        userTo: request.body.userTo
    })

    await notification.save().then(user => {
        response.send(user)
    }).catch(err => {
        console.log(err)
    })

})
module.exports = notificationsRouter