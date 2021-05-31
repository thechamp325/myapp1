const datatemp = require('../models/temp');
const customerdata= require("../models/customerdata");


const postinfo = async (req,res,next) => {
    try {
        await req.body.data.uds.map(async ud => {
            let newEntry = new customerdata(ud);
            newEntry = await newEntry.save();
        });
        res.status(200).send('OK');
    } catch (err) {
        next(err);
    }
};

const getinfo = async (req,res,next) => {
    try{
        let data = await customerdata.find();
        console.log(data);
        res.status(200).json(data);
    }
    catch (err){
        next(err);
    }
}

const postinfoCart = async (req,res,next) => {
    // const cart ={
    //     items:req.body.data.items
    // };
    try {

        let data = await customerdata.findOneAndUpdate({username: req.body.data.name}, { $push: { 
                Cartitems: req.body.data.items
          }} );
        // await req.body.data.uds.map(async ud => {
        //     let newEntry = new customerdata(ud);
        //     newEntry = await newEntry.save();
        // });
        res.status(200).send('OK');
    } catch (err) {
        next(err);
    }
};

const getinfoCart = async (req,res,next) => {
    if(req.params.id=="all"){
        try{
            let data = await customerdata.find().select('Cartitems');
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }
    }
    else{
        try{
            let data = await customerdata.find({username:req.params.id}).select('Cartitems');
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }

    }
}
const postinfoOrders = async (req,res,next) => {
    try {
        await req.body.data.uds.map(async ud => {
            let newEntry = new customerdata(ud);
            newEntry = await newEntry.save();
        });
        res.status(200).send('OK');
    } catch (err) {
        next(err);
    }
};

const getinfoOrders = async (req,res,next) => {
    try{
        let data = await customerdata.find().select('Orders');
        console.log(data);
        res.status(200).json(data);
    }
    catch (err){
        next(err);
    }
}


module.exports = {
    getinfo,
    postinfo,
    getinfoCart,
    postinfoCart,
    getinfoOrders,
    postinfoOrders,
};
