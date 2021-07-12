//express: framework for the backend
const express = require("express");
const path = require("path")
const cors = require("cors");

// define app using express framework
const app = express();
app.use(cors());
const routes = require("./routes");

const  DatabaseController = require ( "./controllers/db");
//Connect db
DatabaseController.connect();

//request and response apply json format
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../frontend/build/index.html'));
})

//use Routes
app.use("/api", routes.api);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`My project is working!!! ${port}`)
});

