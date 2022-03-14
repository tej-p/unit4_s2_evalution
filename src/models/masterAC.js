const mongoose = require('mongoose');

const masterSchema = new mongoose.Schema(
    {
        balance : {type: Number, required: true},
        userId : {type: mongoose.Schema.Types.ObjectId, ref: "User", required:true},
        branchId: {type: mongoose.Schema.Types.ObjectId, ref: "Branch", required:true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Master = mongoose.model("master", masterSchema);

module.exports = Master;

