const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())

const keys = require("./config/key");
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("mongodb is connected");
  });


  // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())
const Auth = require('./routes/Auth')
const Resource = require('./routes/Resource')
const Student = require('./routes/student')
const Teacher = require("./routes/teacher")

app.use('/',Resource,Student,Teacher,Auth)


app.listen(PORT, () => {
  console.log(`port is run on ${PORT}`);
});