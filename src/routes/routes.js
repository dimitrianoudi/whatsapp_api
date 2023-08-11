import Router from 'express';
import whatsAppController from '../controllers/whatsappController.js';

const router = Router();

router
.get('/', whatsAppController.VerifyToken)
.post('/', whatsAppController.ReceivedMessage)

export default router;
