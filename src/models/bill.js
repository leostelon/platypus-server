const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

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
            default: uuidv4()
        },
    },
    {
        timestamps: true,
    }
);

const Bill = new mongoose.model("Bill", BillSchema);
module.exports = { Bill };
