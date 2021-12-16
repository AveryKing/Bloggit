const notificationsRouter = require('express').Router()
const Notification = require('../models/notification')
const User = require('../models/users')
notificationsRouter.get('/count/:user', async (request, response) => {

    await User.findById(request.params.user)
        .then(user => response.json({count:user.notifications.length}))
        .catch(err => response.json({error:'invalid user'}))



})

notificationsRouter.post('/', async (request, response) => {
//TODO: Prevent double requests from being sent, implement auth

    const notification = new Notification({
        notificationData: {type:request.body.notificationType},
        userFrom: request.body.userFrom,
        userTo: request.body.userTo
    })

    const user = await User.findById(request.body.userTo)

    await notification.save().then(notif => {

       user.notifications = user.notifications.concat(notif.id)
        user.save()

        response.json(notif)
    }).catch(err => {
        console.log(err)
    })



})
module.exports = notificationsRouter