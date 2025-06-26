import mongoose from 'mongoose';
const TicketSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  message: String,
  response: String,
  status: { type: String, default: 'open' },
  isEscalated: { type: Boolean, default: false },
}, { timestamps: true });


export default mongoose.model('Ticket', TicketSchema);