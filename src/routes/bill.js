const router = require("express").Router();
const { Bill } = require("../models/bill");
const { v4: uuidv4 } = require('uuid');


router.post("/", async (req, res) => {
    try {
        const bill = await new Bill({
            payment: req.body.payment,
            uid: uuidv4()
        }).save()
        await bill.populate("payment")
        return res.send(bill)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const bill = await Bill.findOne({ uid: req.params.id }).populate("payment")
        return res.send(bill)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;
