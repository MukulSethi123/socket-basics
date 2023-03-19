const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//since the client and server are both on the same domain (localhost)

const port = 3030;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname });
});

// app.post("/", (req, res) => {
//   console.log("hehe");
//   res.send("hello");
// });

io.on("connection", (socket) => {
  console.log("a user is connected");
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

server.listen(port, () => {
  console.log("running client");
});
