const express = require('express')
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')
const connectDB = require('./config/db')

connectDB();

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());

app.use('api/auth',authRoutes)
app.use('api/products',productRoutes)


app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`)
})