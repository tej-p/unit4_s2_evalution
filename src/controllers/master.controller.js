const express = require("express");

const Master = require("../models/masterAC");

const router = express.Router();

router.get("", async(req, res) => {
    try{
        const master = await Master.find().populate("userId").lean().exec();

        return res.status(200).send(master);
    }
    catch(e){
        return res.status(500).send({message: e.message});
    }
})

module.exports = router;