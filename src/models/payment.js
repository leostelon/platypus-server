const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Payment = new mongoose.model("Payment", PaymentSchema);
module.exports = { Payment };
