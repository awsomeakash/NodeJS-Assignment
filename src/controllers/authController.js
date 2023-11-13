const authService = require('../services/authServices');
const userModel = require('../models/userModel');

async function register(req, res) {
  const { email, password } = req.body;
  console.log(req.body)
  try {
    const user = await authService.registerUser(email, password);
    res.render('home', { successMessage: 'Registration successful. Welcome!' });
  } catch (error) {
    console.error(error); // Log the error
    res.status(401).render('home', { errorMessage: 'Invalid credentials.' });
  }
}


async function login(req, res) {
  const { email, password } = req.body;

  try {
    const token = await authService.loginUser(email, password);
    res.json({ success: true, token });
  } catch (error) {
    console.error(error); // Log the error
    res.status(401).json({ success: false, error: 'Invalid credentials.' });
  }
}


const logout = (req, res) => {
  res.redirect('/');
};

module.exports = {
  register,
  login,
  logout
};
