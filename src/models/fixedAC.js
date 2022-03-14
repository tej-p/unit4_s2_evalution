const mongoose = require('mongoose');

const fixedSchema = new mongoose.Schema(
    {
        acNo : {type: Number, required: true, unique:true},
        balance: {type: Number, required: true},
        interestRate: {type: Number, required:true},
        startDate: {type:String, required: true},
        maturityDate: {type:String, required: true},
        userId : {type: mongoose.Schema.Types.ObjectId, ref: "User", required:true}, 
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Fixed = mongoose.model("fixed", savingSchema);

module.exports = Fixed;

