const server = require("http").createServer();
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});

const PORT = 4000;
const NEW_NOTIFICATION_EVENT = "newNotification";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);

    // Join a conversation
    const { roomId } = socket.handshake.query;
    socket.join(roomId);

    // Listen for new messages
    socket.on(NEW_NOTIFICATION_EVENT, (data) => {
        io.in(roomId).emit(NEW_NOTIFICATION_EVENT, data);

        console.log(data.body)
    });

    socket.emit('newNotification',{body:'test notification'})
    socket.emit('newNotification',{body:'test notification'})
    socket.emit('newNotification',{body:'test fuck'})
    // Leave the room if the user closes the socket
    socket.on("disconnect", () => {
        console.log(`Client ${socket.id} diconnected`);
        socket.leave(roomId);
    });
});

server.listen(PORT, () => {
    console.log(`socket.io server started (port ${PORT})`);
});

const sendToClient = (msg) => {
    console.log(msg)
}

module.exports = {
    sendToClient
}