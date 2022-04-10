const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const expressServer = http.createServer(app);


const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New User connected.");

  socket.on('chat', (data) => {
    console.log(data);

    socket.emit('chat_transfer', data)
  })

});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const port = process.env.PORT || 3000;
expressServer.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
