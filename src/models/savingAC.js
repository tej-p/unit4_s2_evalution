const mongoose = require('mongoose');

const savingSchema = new mongoose.Schema(
    {
        acNo : {type: Number, required: true, unique:true},
        balance: {type: Number, required: true},
        interestRate: {type: Number, required:true},
        userId : {type: mongoose.Schema.Types.ObjectId, ref: "User", required:true}, 
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Saving = mongoose.model("saving", savingSchema);

module.exports = Saving;

