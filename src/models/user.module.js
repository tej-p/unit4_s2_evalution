const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstname : {type: String, require: true},
        middleName : {type: String, require: false},
        lastName : {type: String, required: true},
        age : {type: Number, required: true},
        email : {type: String, required: true, unique:true},
        address : {type: String, required: true},
        branchId: {type: mongoose.Schema.Types.ObjectId, ref: "Branch", required:true},
        
        
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const User = mongoose.model("user", userSchema);

module.exports = User;

