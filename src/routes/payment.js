const router = require("express").Router();
const { Payment } = require("../models/payment");

router.post("/", async (req, res) => {
    try {
        const payment = await new Payment(req.body).save()
        return res.send(payment)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;
