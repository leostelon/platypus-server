const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const http = require("http").createServer(app);

require("dotenv").config({ path: path.join(__dirname, "../.env") });

// Database
require("./database/mongoose");

// Bootstrap models
const models = path.join(__dirname, "models");
fs.readdirSync(models)
    .filter((file) => ~file.search(/^[^.].*\.js$/))
    .forEach((file) => require(path.join(models, file)));

// CORS
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        " GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    console.log(req.path);

    next();
});
app.use(express.json());

// Bootstrap routes
const { routes } = require("./routes");
// routes.websiteV1(app);
app.use(routes);

app.get("/", (req, res) => {
    res.send({ message: "Platypus Server" });
});

app.use("*", (req, res) => {
    res.status(404).send({ message: "Invalid API route!" });
});

const port = process.env.PORT || 3000;
http.listen(port, () => {
    console.log("Server running on port " + port);
});
