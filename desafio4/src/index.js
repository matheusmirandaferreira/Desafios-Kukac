const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

nunjucks.configure("./src/html", {
    autoescape: true,
    express: app,
    noCache: true,
});

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    .get("/", (req, res) => {
        return res.render("index.html");
    });
require("./controller/cepController")(app);

app.listen(3003);
