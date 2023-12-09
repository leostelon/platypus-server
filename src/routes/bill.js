const router = require("express").Router();
const { Bill } = require("../models/bill");

router.post("/", async (req, res) => {
    try {
        const bill = await new Bill({ payment: req.body.payment }).save()
        return res.send(bill)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;
