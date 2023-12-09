const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema(
    {
        payment: {
            type: mongoose.Types.ObjectId,
            ref: "Payment",
            required: true,
        },
        uid: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Bill = new mongoose.model("Bill", BillSchema);
module.exports = { Bill };
