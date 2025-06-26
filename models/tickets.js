const mongoose = require('mongoose');
const TicketSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  message: String,
  response: String,
  status: { type: String, default: 'open' },
  isEscalated: { type: Boolean, default: false },
}, { timestamps: true });


module.exports = mongoose.model('Ticket', TicketSchema);