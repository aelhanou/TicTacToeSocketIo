// import express from "express"
// import http from "http"
import { Server } from "socket.io"
let dataUser = new Map();
// import cors from "cors"
// const app = express()
// const server = http.createServer(app);

const io = new Server(4441, {
    cors: {
        origin: "*",
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true,
    pingTimeout: 60000
});

// app.use(cors({
//     origin: "*"
// }))



// server-side
// io.on("connection", (socket) => {
//     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
//     let data = []
//     socket.on("data", (msg) => {
//         console.log(msg);
//         socket.emit("data", msg)
//     })
// });

// ;




io.on("connection", (socket) => {
    console.log(socket.id, "New client connected");


    socket.emit("connection", { id: socket.id })
    socket.on("dataUser", (msg) => {
        let { roomId } = msg
        if (dataUser.get(roomId)) {
            // console.log({ ...dataUser.get(roomId), ...msg });
            dataUser.set(roomId, { ...dataUser.get(roomId), ...msg })
        } else {
            dataUser.set(roomId, msg)
        }
        getApiAndEmit(roomId)
    })

});


const getApiAndEmit = (roomId) => {
    let data = dataUser.get(roomId)
    io.emit("dataUser", data);
};







// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "socket bro"
//     })
// })





