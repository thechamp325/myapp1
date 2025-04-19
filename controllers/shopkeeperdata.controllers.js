const datatemp = require('../models/temp');
const shopkeeperData= require("../models/shopkeeperData");
const OnlineShopProductData = require("../models/OnlineShopProductData");
const ShopProfileData = require("../models/ShopProfileData");
const vendorData = require("../models/vendorData");
const login = async (req,res,next) => {
    try{
        console.log(req.body.aadhar);
        let data = await shopkeeperData.find({aadharid:req.body.aadhar});
        console.log(data);


        if(data[0].password == req.body.password){
            console.log(data);

            res.status(200).json(data);

        }
        else{
            next(err);
        }
    }
    catch (err){
        next(err);
    }
};


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
    const id = req.params.id;
    if(id=="all"){
        try{
            let data = await ShopProfileData.find();
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }
    }
    else{
        try{
            let data = await ShopProfileData.find({aadharid:id});
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }
    }
    
}

const addVendors = async (req,res,next) => {
    try {
        await req.body.data.uds.map(async ud => {
            let newEntry = new vendorData(ud);
            newEntry = await newEntry.save();
        });
        res.status(200).send('OK');
    } catch (err) {
        next(err);
    }
};

const getVendors = async (req,res,next) => {
    try{
        let data = await vendorData.find();
        console.log(data);
        res.status(200).json(data);
    }
    catch (err){
        next(err);
    }
};




module.exports = {
    login,
    getinfo,
    postinfo,
    addProductToOnlineShop,
    getProductToOnlineShop,
    postinfoShopProfile,
    getinfoShopProfile,
    addVendors,
    getVendors,
};
