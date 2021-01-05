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

const app = express();

//files for keeping image
app.use('/files', express.static("files"));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/carts", carts);

const PORT = process.env.PORT || 4000;

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
  );
