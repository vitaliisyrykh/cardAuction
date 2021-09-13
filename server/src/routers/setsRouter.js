import express from 'express';
import SetController from '../../controllers/SetController';

const setsRouter = express.Router({
  mergeParams: true
});

setsRouter
  .route('/')
  .post(SetController.createSet)
  .get(SetController.findAllWithCards);

  export default setsRouter;