const notificationsRouter = require("express").Router();
const Notification = require("../models/notification");
const User = require("../models/users");

notificationsRouter.get("/:user", async (request, response) => {
    const arr = [];
    await Notification.find({ userTo: request.params.user }).then(
        (notification) => {
            arr.push(notification);
        }
    );

    response.json(arr);
});

notificationsRouter.get("/count/:user", async (request, response) => {
    await User.findById(request.params.user)
        .then((user) => response.json({ count: user.notifications.length }))
        .catch((err) => response.json({ error: "invalid user" }));
});

notificationsRouter.post("/accept", async (request, response) => {
    let userFrom;
    let userTo;
    await Notification.findByIdAndRemove(request.body.id)
        .then(async (notif) => {
            userFrom = notif.userFrom;
            userTo = notif.userTo;
            await User.findById(userFrom)
                .then(async (user) => {
                    await user.outgoingFriendRequests.pull(userTo);
                    user.friends.push(userTo);
                    user.save().then(async (func) => {
                        await User.findById(userTo).then(async (user) => {
                            await user.notifications.pull(request.body.id);
                            user.friends.push(userFrom);
                            user.save();
                            response.json({ userAdded: userFrom });
                        });
                    });
                })
                .catch((err) => {
                    response.json({ error: "there was an error" });
                });
        })
        .catch((err) => {
            response.json({ error: "there was an error" });
        });
});

notificationsRouter.post("/", async (request, response) => {
    //TODO: Prevent double requests from being sent, implement auth

    let notificationMessage;
    await User.findById(request.body.userFrom).then((user) => {
        notificationMessage = `${user.username} sent you a friend request.`;
    });

    const notification = new Notification({
        notificationData: {
            type: request.body.notificationType,
            message: notificationMessage,
        },
        userFrom: request.body.userFrom,
        userTo: request.body.userTo,
    });

    if (request.body.notificationType === "friendRequest") {
        const user = await User.findById(request.body.userFrom);
        user.outgoingFriendRequests.push(request.body.userTo);
        await user.save();
    }

    const user = await User.findById(request.body.userTo);

    await notification
        .save()
        .then((notif) => {
            user.notifications = user.notifications.concat(notif.id);
            user.save();

            response.json(notif);
        })
        .catch((err) => {
            console.log(err);
        });
});
module.exports = notificationsRouter;
