const salesData = require('../models/Sales');


const purchasesData= require('../models/Purchases.js');
const productData = require('../models/ProductData');



const postBillSales = async (req,res,next) => {
    try {
        await req.body.data.uds.map(async ud => {
            let newEntry = new salesData(ud);
            // let data = await purchasesData.findOne();
            newEntry = await newEntry.save();
            // newEntry1 = await newEntry1.save(); //remove

        });
    } catch (err) {
        next(err);
    }
    try{
        await req.body.data.uds.map(async ud => {
        let data = await productData.findOne({productName:ud.productName});
        if(data){
            let data1 = await productData.findOneAndUpdate({productName:ud.productName},{quantity:data.quantity-ud.quantity});
        }
        else{
            next(err);
        }
        });
        res.status(200).send('OK');

    }
    catch (err) {
        next(err);
    }
};

const postBillPurchases = async (req,res,next) => {
    try {
        await req.body.data.uds.map(async ud => {
            let newEntry = new purchasesData(ud);
            newEntry = await newEntry.save();

        });
    } catch (err) {
        next(err);
    }
    try{
        await req.body.data.uds.map(async ud => {
        let data = await productData.findOne({productName:ud.productName});
        if(data){
            let data1 = await productData.findOneAndUpdate({productName:ud.productName},{quantity:data.quantity+ud.quantity});
        }
        else{
            let newEntry = new productData(ud);
            newEntry = await newEntry.save();
        }
        });
        res.status(200).send('OK');

    }
    catch (err) {
        next(err);
    }
};




const getpurchases = async (req,res,next) => {
    try{
        let data = await purchasesData.find();
        console.log(data);
        res.status(200).json(data);
    }
    catch (err){
        next(err);
    }
}

const getsales = async (req,res,next) => {
    try{
        let data = await salesData.find();
        console.log(data);
        res.status(200).json(data);
    }
    catch (err){
        next(err);
    }
}


module.exports = {
    getpurchases,
    getsales,
    postBillSales,
   postBillPurchases,
};
