const datatemp = require('../models/temp');
const userdata= require("../models/userdata");

const postinfo = async (req,res,next) => {
    try {
        await req.body.data.uds.map(async ud => {
            let newEntry = new userdata(ud);
            newEntry = await newEntry.save();
        });
        res.status(200).send('OK');
    } catch (err) {
        next(err);
    }
};

const getinfo = async (req,res,next) => {
    try{
        console.log(datatemp);
        res.status(200).json(datatemp);
    }
    catch (err){
        next(err);
    }
}
module.exports = {
    getinfo,
    postinfo,
};
