const express = require("express");
const app = express();
const tourRouter = require("./routes/tourRouter.js");
const userRouter = require('./routes/userRouter');

const morgan = require('morgan');
app.use(morgan('tiny'));



// Middleware to parse JSON
app.use(express.json());

// Use the carRouter for all /cars routes
app.use('/api/tours', tourRouter);

app.use('/api/users', userRouter);

// Use the userRouter for all /users routes



const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

