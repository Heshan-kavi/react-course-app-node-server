const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./db/connection');

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(require("./routes/meetups"));
app.get('/', (req,res) => res.send('hello machan'));

connectDB();
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  console.log("success !!!")
});