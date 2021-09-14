import MessageService from "../services/MessageService";
import {
  badRequestError,
  successCreated,
  success,
  notFoundError,
} from "../utils/resFuncs";
import { emitSocketMessage } from "../services/socketService";

class ChatController {
  async newMessage(req, res, next) {
    try {
      const savedMessage = await MessageService.save(req.body);
      if (savedMessage) {
        emitSocketMessage(savedMessage);
        return successCreated(res, savedMessage);
      }
      return badRequestError(res, "Message cannot save");
    } catch (error) {
      next(error);
    }
  }

  async findAll(req, res, next) {
    try {
      const messages = await MessageService.findAll();
      if (messages.length === 0) {
        return notFoundError(res, "Messages not found");
      }
      return success(res, messages);
    } catch (error) {
      next(error);
    }
  }
}

export default new ChatController();
