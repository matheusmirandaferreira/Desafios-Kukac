const express = require("express");
const app = express();

app
    .use(express.json())
    .use(express.static("public"))
    .get("/", (req, res) => {
        return res.sendFile("index.html", { root: __dirname + "/html" });
    });

app.listen(3000);
