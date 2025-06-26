const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const mongoose = require('mongoose')


const authRoutes = require ('./routes/auth.routes');
const ticketRoutes = require ('./routes/ticket.routes');

dotenv.config();

const app = express();

//Middleware 
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'],
   credentials: true }));

   
app.use(express.json());

//MongoDb connection Setup



 mongoose.connect(process.env.MONGO_URL, {
   dbName:'Swarts'
    
}).then(()=> console.log("MongoDB connected")).catch((err)=> console.log(err))

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));