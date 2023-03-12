const express = require("express");
const io = require("socket.io-client");
const app = express();

//since the client and server are both on the same domain (localhost)
const socket = io();

const port = 3030;

app.use(express.static("public"));

app.get("/", (req, res) => {
  socket.on("connet", () => {
    console.log(socket.id);
  });
  res.sendFile("/public/index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log("running client");
});
