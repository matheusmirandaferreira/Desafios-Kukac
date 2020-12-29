const express = require("express");
const router = express.Router();

router.post("/findcep", (req, res) => {
    try {
        const { cep1, cep2, cep3, cep4, cep5 } = req.body;

        global.fetch = require("node-fetch");

        const ViaCep = require("node-viacep").default;
        const viacep = new ViaCep({
            type: "json",
        });

        const address1 = viacep.zipCod.getZip(cep1);
        const address2 = viacep.zipCod.getZip(cep2);
        const address3 = viacep.zipCod.getZip(cep3);
        const address4 = viacep.zipCod.getZip(cep4);
        const address5 = viacep.zipCod.getZip(cep5);

        address1
            .then((data) => data.json())
            .then((data) => console.log(data));

        address2
            .then((data) => data.json())
            .then((data) => console.log(data));

        address3
            .then((data) => data.json())
            .then((data) => console.log(data));

        address4
            .then((data) => data.json())
            .then((data) => console.log(data));

        address5
            .then((data) => data.json())
            .then((data) => console.log(data));

        return res.send("Confira seu terminal...");

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: "failed" });
    }
});

module.exports = (app) => app.use("/cep", router);

// ceps - exemplos
//01313000
//01407000
//69095400
//04849270