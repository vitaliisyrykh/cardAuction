import express from 'express';
import ChatController from '../controllers/ChatController';
const chatRouter = express.Router({
  mergeParams:true
});

chatRouter.route('/').get(ChatController.findAll).post(ChatController.newMessage);


export default chatRouter;