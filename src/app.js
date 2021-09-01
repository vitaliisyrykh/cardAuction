import express  from 'express';
import cors from 'cors';
import router  from './server/router/index';
import {tokenErrorHandler, basicErrorHandler} from './handlerError/handler';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use('/api', router);

app.use(tokenErrorHandler);
app.use(basicErrorHandler);

export default app;
