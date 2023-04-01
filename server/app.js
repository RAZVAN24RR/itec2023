const express = require('express');
const morgan = require('morgan');

const usersRouter = require('./routes/UserRoutes');

const app = express();

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
