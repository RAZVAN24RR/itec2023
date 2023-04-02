const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/UserModel');
const usersRouter = require('./routes/UserRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

//Api register
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});
//Api register end
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const token = jwt.sign({ userId: user._id }, 'secret');
    // localStorage.setItem('key', token);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});
//Api login

//Api login end

// 1). MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware! 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString;
  next();
});

//2). ROUTES
app.use('/api/v1/users', usersRouter);

module.exports = app;
