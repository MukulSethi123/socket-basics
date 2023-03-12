const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const app = express();
const port = 3000;

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("A new client connected");

  // Handle messages from the client
  socket.on("message", (data) => {
    console.log(`Received message from client: ${data}`);
    // Broadcast the message to all clients
    io.emit("message", data);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

app.listen(port, () => {
  console.log("running server");
});
