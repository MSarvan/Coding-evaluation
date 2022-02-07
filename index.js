const mongoose = require("mongoose");

const express = require("express");

const app = express();

const connect = ()=> {
    return mongoose.connect("mongodb+srv://saro:saro_123@cluster0.0e5zr.mongodb.net/admin?authSource=admin&replicaSet=atlas-rqu6xv-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true");
}

app.listen(2347, async ()=> {
    await connect();
    console.log("listening on port 2347");
});

