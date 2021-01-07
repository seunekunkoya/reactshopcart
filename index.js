const express = require('express');
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require("./src/config/db");


//make env know where the config env file is
dotenv.config({ path: "./src/config/config.env"});

connectDB();

const carts = require("./src/routes/carts");
const prodcart = require("./src/Cart/cartroute");

const app = express();

require('./src/routehandler')(app);

//files for keeping image
app.use("./src/files", express.static("files"));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
  );
