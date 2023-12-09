const router = require("express").Router();
const jwt = require("./jwt")
const payment = require("./payment")
const bill = require("./bill")

router.use("/jwt", jwt)
router.use("/payment", payment)
router.use("/bill", bill)

module.exports = { routes: router };
