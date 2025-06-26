const Ticket = require('../models/tickets');
const { getAIResponse } = require('../utils/aiAssistant');

 const submitTicket = async (req, res) => {
  try{
  const { message } = req.body;
  const isSupport = message.toLowerCase().includes('support');
  const response = isSupport ? 'A support agent will contact you.' : await getAIResponse(message);


  const ticket = new Ticket({ userId: req.user.id, message, response, isEscalated: isSupport });
 
  await ticket.save();
  res.status(201).json(ticket);
} catch (error) {
  console.log('Ticket submission error:', error.message);
  res.status(500).json({ message: 'Internal server error'})
}
 }

 module.exports = {submitTicket}