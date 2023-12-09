const jwt = require("jsonwebtoken");
const { makeRequestMumbai } = require("../utils/request");
const router = require("express").Router();

router.post("/", (req, res) => {
    try {
        if (!req.body.tokens) return res.status(500).send({ message: "Please send tokens list" });

        let data = {}

        req.body.tokens.forEach(element => {
            const decoded = jwt.verify(element, "secret");
            if (!data[decoded.address]) data[decoded.address] = 0;
            data[decoded.address] += parseFloat(decoded.amount);
        });
        let address = Object.keys(data);
        let amount = Object.values(data);

        return res.send({ address, amount })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message });
    }
});

router.post("/admin", async (req, res) => {
    try {
        const response = await makeRequestMumbai();
        res.send(JSON.parse(response))
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})
module.exports = router;