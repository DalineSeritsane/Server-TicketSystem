import Ticket from '../models/ticket.js';
import { getAIResponse } from '../utils/aiAssistant.js';
export const submitTicket = async (req, res) => {
  const { message } = req.body;
  const isSupport = message.toLowerCase().includes('support');
  const response = isSupport ? 'A support agent will contact you.' : await getAIResponse(message);
  const ticket = new Ticket({ userId: req.user.id, message, response, isEscalated: isSupport });
  await ticket.save();
  res.status(201).json(ticket);
};