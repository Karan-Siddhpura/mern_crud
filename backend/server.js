const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const PORT = process.env.PORT;
const url = process.env.MONGO_URI;
const app = express();

app.use(cors());
app.use(express.json());

//Mongodb connect
mongoose.connect(url).then((data) => {
    console.log("Mongo db connected successfully");
}).catch((err) => {
    console.log(err);
});

app.use("/", require("./routes/userRouter"))



app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});