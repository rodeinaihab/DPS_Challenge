//express: framework for the backend
const express = require("express");
// define app using express framework
const app = express();
const routes = require("./routes");

const  DatabaseController = require ( "./controllers/db");
//Connect db
DatabaseController.connect();

//request and response apply json format
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//use Routes
app.use("/api", routes.api);

const port = 4000;
app.listen(port, () => console.log(`My project is working!!! ${port}`));
