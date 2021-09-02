import express  from 'express';
import cors from 'cors';
import router  from './routers/index';
import {tokenErrorHandler, basicErrorHandler} from './handleError/handle';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use('/api', router);

app.use(tokenErrorHandler);
app.use(basicErrorHandler);

export default app;
