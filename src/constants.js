import dotenv from "dotenv";
dotenv.config();

const {
  env: {
    ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_TIME,
    REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_TIME,
    MAX_DEVICES_AMOUNT,
    SALT_ROUNDS,
  },
} = process;

export default {
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_TIME,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_TIME,
  MAX_DEVICES_AMOUNT,
  SALT_ROUNDS,
  ADMIN: "admin",
  SOCKET_CONNECTION: "connection",
  SOCKET_SUBSCRIBE: "subscribe",
  SOCKET_UNSUBSCRIBE: "unsubscribe",
  host: "localhost",
  dbUser: "postgres",
  password: "123456",
  base: "test",
  client: "pg",
  statusOk: 200,
  statusCreated: 201,
  statusNoContent: 204,
  statusBadRequest: 400,
  statusUnauthorized: 401,
  statusNotfound: 404,
};
