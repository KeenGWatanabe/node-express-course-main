// 1. load dotenv pkg
require('dotenv').config();
require('express-async-errors');

// 2. imports express module to create application
const express = require('express');
const app = express();

const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// 3. Middleware - serves static files (./public) 
app.use(express.static('./public'));

// parse(analyse) JSON payloads
app.use(express.json());

//to use login/dashboard, includes /api/v1
app.use('/api/v1',mainRouter); 

// custome middleware error handling
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// load env var into process.env
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

// invokes start fn
start();
