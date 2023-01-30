import { Server } from "socket.io";

const io = new Server();

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);

  // send an event to the client
  socket.emit("foo", "bar");

  socket.on("message", (msg) => {
    console.log(JSON.stringify(msg, null, 2));
  });

  // upon disconnection
  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
});

io.listen(9000);
