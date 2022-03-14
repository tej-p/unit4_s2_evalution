const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema(
    {
        name : {type: String, require: true},
        address : {type: String, required: true},
        IFSC : {type: String, require: true},
        MICR : {type: String, required: true}, 
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Branch = mongoose.model("branch", branchSchema);

module.exports = Branch;

