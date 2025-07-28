const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log('MONGODB connected successfully'))
.catch(err=>console.log('Failed to connect:',err));

app.use('/api/movies',movieRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
  console.log(`Server : http://localhost:${PORT}`);
});