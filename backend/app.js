const session = require("express-session");
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const controller = require("./controller");

const app = express();

app.use(bodyparser.json());

mongoose.connect('mongodb+srv://qqtwitter:qqtwitter@cluster0-dugdo.mongodb.net/avaliacaotwitter?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(
    session({
        secret: "secretkeybitch123",
        saveUninitialized: true,
        resave: true,
        cookie: {maxAge:60000*30},
    })
);

controller(app);

app.listen(3000,() => console.log("Escutando......."));