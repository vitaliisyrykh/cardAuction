import express from 'express';
import ChatController from '../controllers/ChatController';
const chatRouter = express.Router({
  mergeParams:true
});

chatRouter.route('/').get(ChatController.findAllUserChats);
chatRouter.route('/:chatId').get(ChatController.findOne);

export default chatRouter;