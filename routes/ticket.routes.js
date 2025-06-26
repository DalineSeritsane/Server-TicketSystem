const express = require('express');
const { submitTicket } = require ('../controllers/ticket.controller');
const { getAllTickets, updateTicketStatus, getTicketStats } = require('../controllers/ticket.admin.controller');
const  authMiddleware = require ('../middlewares/auth');
const adminMiddleware = require ('../middlewares/admin');

const router = express.Router();

// Create Ticket (Protected)
router.post('/', authMiddleware, submitTicket);

// Admin-only routes
router.get('/admin', authMiddleware, adminMiddleware, getAllTickets);
router.put('/admin/:ticketId', authMiddleware, adminMiddleware, updateTicketStatus);
router.get('/admin/stats', authMiddleware, adminMiddleware, getTicketStats);

module.exports =  router