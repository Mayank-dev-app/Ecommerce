const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.MonogURL;
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected",() => console.log("mongo DB Connected Successfully"));
db.on("disconnected", () =>console.log("Mongo DB disconnected Successfully"));
db.on("error", (err) => console.log("It Have Some Error", err))
