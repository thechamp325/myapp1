// const datatemp = require('../models/temp');
const Bookkeepingdata= require("../models/BookkeepingData");


const postinfo = async (req,res,next) => {
    try {
        await req.body.data.uds.map(async ud => {
            let newEntry = new Bookkeepingdata(ud);
            newEntry = await newEntry.save();
        });
        res.status(200).send('OK');
    } catch (err) {

        console.log(req.body);
        next(err);
    }
};

const getinfo = async (req,res,next) => {
    const shopid = req.params.id;
    if(shopid=="all"){
        try{
            let data = await Bookkeepingdata.find();
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }
    }
    else{
        try{
            let data = await Bookkeepingdata.find({shopid:shopid});
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }
    }

}


module.exports = {
    getinfo,
    postinfo
};
