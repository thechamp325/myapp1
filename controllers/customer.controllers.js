const datatemp = require('../models/temp');
const customerdata= require("../models/customerdata");
const Razorpay = require("razorpay");


const login = async (req,res,next) => {
    try{
        console.log(req.body.aadhar);
        let data = await customerdata.find({aadharid:req.body.aadhar});
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
            let newEntry = new customerdata(ud);
            newEntry = await newEntry.save();
        });
        res.status(200).send('OK');
    } catch (err) {
        next(err);
    }
};

const getinfo = async (req,res,next) => {
    if(req.params.id == "all"){
        try{
            let data = await customerdata.find();
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }
    }
    else{
        try{
            let data = await customerdata.find({aadharid:Number(req.params.id)});
            console.log(data);
            res.status(200).json(data);
        }
        catch (err){
            next(err);
        }
    }
    
}

const postinfoCart = async (req,res,next) => {
    // const cart ={
    //     items:req.body.data.items
    // };
    try {

        let data = await customerdata.findOneAndUpdate({aadharid: Number(req.body.data.aadharid)}, { $push: { 
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
            let data = await customerdata.find({aadharid:Number(req.params.id)}).select('Cartitems');
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


const orderspay = async (req,res,next) => {
    const RAZORPAY_SECRET="YC1rtcEj9nyiLCHsNXodlnov";
    const RAZORPAY_KEY_ID="rzp_test_oryNDXfwsBZuq0";
    console.log("called orderspay");
    try {
        const instance = new Razorpay({
            key_id: RAZORPAY_KEY_ID,
            key_secret: RAZORPAY_SECRET,
        });

        const options = {
            amount: 100, // amount in smallest currency unit 100p=1R
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        console.log("error");
        res.status(500).send(error);
    }
    
};

const ordersuccess = async (req,res,next) => {



    // try {
    //     // getting the details back from our font-end
    //     const {
    //         orderCreationId,
    //         razorpayPaymentId,
    //         razorpayOrderId,
    //         razorpaySignature,
    //     } = req.body;

    //     // Creating our own digest
    //     // The format should be like this:
    //     // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    //     const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");

    //     shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    //     const digest = shasum.digest("hex");

    //     // comaparing our digest with the actual signature
    //     if (digest !== razorpaySignature)
    //         return res.status(400).json({ msg: "Transaction not legit!" });

    //     // THE PAYMENT IS LEGIT & VERIFIED
    //     // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

    //     res.json({
    //         msg: "success",
    //         orderId: razorpayOrderId,
    //         paymentId: razorpayPaymentId,
    //     });
    // } catch (error) {
    //     res.status(500).send(error);
    // }

    try {
        console.log(req.data)
        res.status(200).send('OK');
    } catch (err) {
        next(err);
    }
};

module.exports = {
    login,
    getinfo,
    postinfo,
    getinfoCart,
    postinfoCart,
    getinfoOrders,
    postinfoOrders,
    orderspay,
    ordersuccess,
};
