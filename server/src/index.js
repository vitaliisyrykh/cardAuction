import http from "http";
import app from "./app";
import {startIo} from './services/socketService'
const server = http.createServer(app);

startIo(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`app listening on port${PORT}`);
});

