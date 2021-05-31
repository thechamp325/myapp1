const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OnlineShopProductData =  new Schema({
    productName:{
        type: String,
    },
    productId:{
        type: String,
    },
    quantity:{
        type:Number
    },
    price:{
        type:Number
    },
    offer:{
        type: Number
    },
    shopId:{
        type: String
    },
    productInfo:{
    },
    productImages:{
        type: String
    }

    

});

const OrderSchema = new Schema({ 
    orderid:{
        type:String
    },
    date:{
        type:Date
    },
    deliverystatus:{
        type:String
    },
    totalprice:{
        type:Number
    },
    items:{
        type: [OnlineShopProductData]
    }
});


const customerSchema =  new Schema({
    username:{
        type: String,
        unique: true,
    },
    password: {
        type:String,
    },
    mobile: {
        type:String,
    },
    name: {
        type: String,
    },
    aadharid: {
        type: Number,
        unique: true,
    },
    address: {
        type:  String,
    },
    zipcode: {
        type : Number,
    },
    state: {
        type: String,
    },
    district: {
        type: String,
    },
    taluka: {
        type: String,
    },
    Cartaddress:{
        type:String
    },
    Cartitems:{
            type: [OnlineShopProductData]
    },
    Orders:{
        type: [OrderSchema]
    }

});


module.exports = mongoose.model("customerData",customerSchema);