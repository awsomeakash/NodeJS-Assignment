// app.js
const express = require('express');
const connectDB = require('./src/db/connectDB')
const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require('./src/routes/productRoutes.js');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

//Middleware to connect to static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

// Serve static files (EJS views)
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Define routes for views
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/register', (req, res) => {
  res.render('register'); 
});

app.get('/products', (req, res) => {
  res.render('products');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
