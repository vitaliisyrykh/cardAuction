import http from "http";
import { Server } from "socket.io";
import app from "./app";

const server = http.createServer(app);
//const io = new Server(httpServer);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`app listening on port${PORT}`);
});
