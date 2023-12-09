const router = require("express").Router();
const payment = require("./payment")
const bill = require("./bill")

router.use("/payment", payment)
router.use("/bill", bill)

module.exports = { routes: router };
