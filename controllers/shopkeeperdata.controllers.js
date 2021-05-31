const datatemp = require('../models/temp');
const shopkeeperData= require("../models/shopkeeperData");
const OnlineShopProductData = require("../models/OnlineShopProductData");
const ShopProfileData = require("../models/ShopProfileData");

const postinfo = async (req,res,next) => {
    try {
        await req.body.data.uds.map(async ud => {
            let newEntry = new shopkeeperData(ud);
            newEntry = await newEntry.save();
        });
        res.status(200).send('OK');
    } catch (err) {
        next(err);
    }
};

const getinfo = async (req,res,next) => {
    try{
        let data = await shopkeeperData.find();
        console.log(data);
        res.status(200).json(data);
    }
    catch (err){
        next(err);
    }
}

const addProductToOnlineShop = async (req,res,next) => {
    try {
        await req.body.data.uds.map(async ud => {
            let newEntry = new OnlineShopProductData(ud);
            newEntry = await newEntry.save();
        });
        res.status(200).send('OK');
    } catch (err) {
        next(err);
    }
};

const getProductToOnlineShop = async (req,res,next) => {
    const id = req.params.id;
    if(id=="all"){
        try{
            let data = await OnlineShopProductData.find();
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }
    }
    else{
        try{
            let data = await OnlineShopProductData.find({shopId:id});
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }
    }
};



const postinfoShopProfile = async (req,res,next) => {
    try {
        await req.body.data.uds.map(async ud => {
            let newEntry = new ShopProfileData(ud);
            newEntry = await newEntry.save();
        });
        res.status(200).send('OK');
    } catch (err) {
        next(err);
    }
};

const getinfoShopProfile = async (req,res,next) => {
    try{
        let data = await ShopProfileData.find();
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
    addProductToOnlineShop,
    getProductToOnlineShop,
    postinfoShopProfile,
    getinfoShopProfile,
};
