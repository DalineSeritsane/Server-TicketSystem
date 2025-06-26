import Ticket from '../model/tickets.js';

export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTicketStatus = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { status, response } = req.body;
    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { status, response },
      { new: true }
    );
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTicketStats = async (req, res) => {
  try {
    const total = await Ticket.countDocuments();
    const open = await Ticket.countDocuments({ status: 'open' });
    const closed = await Ticket.countDocuments({ status: 'closed' });
    const escalated = await Ticket.countDocuments({ isEscalated: true });

    res.json({ total, open, closed, escalated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};