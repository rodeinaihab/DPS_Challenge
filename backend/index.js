//express: framework for the backend
const express = require("express");
const path = require("path")
const cors = require("cors");
require('dotenv').config()

// define app using express framework
const app = express();
app.use(cors());
const routes = require("./routes");

const  DatabaseController = require ( "./controllers/db");
//Connect db
DatabaseController.connect();
require("dotenv").config();

//request and response apply json format
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//use Routes
app.use("/api", routes.api);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`My project is working!!! ${port}`)
});

