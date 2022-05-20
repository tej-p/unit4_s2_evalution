const express = require("express");
const mongoose = require("mongoose");

const masterController = require("./controllers/master.controller")

const app = express();

app.use(express.json());


app.use("/master", masterController);



const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/s2_eval");
};



app.listen(2788, async(req, res) => {
    try{
        await connect();
        console.log("Listening at 2788");
    }
    catch(er){
        console.log({error: er});
    }
})

// aDSFKJGML;,SDKFBKMVL,C;.XJHBVCVBNM,.HJGCVBNJM