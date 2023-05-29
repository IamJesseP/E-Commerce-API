require('dotenv').config();
require('express-async-errors');

// express
const express = require('express');

const app = express();

// misc. packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

// database
const connectDB = require('./db/connect');

// routers
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

// middleware
const notFoundMiddleWare = require('./middleware/not-found');
const errorHandlerMiddleWare = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(express.json()); // <- parse req.body
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static('./public'));
app.use(fileUpload());
// homepage route
app.get('/', (req, res) => {
  res.send('e-commerce api');
});
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);
// Middleware functions are executed in the order in which they are defined, and the first middleware
// function that terminates the request-response cycle (by calling res.send, res.end, or res.json, for example)
// will prevent any subsequent middleware functions from being executed.

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
