const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ProductInfoSchema =  new Schema({

// });
const OnlineShopProductDataSchema =  new Schema({
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

module.exports = mongoose.model("OnlineShopProductData",OnlineShopProductDataSchema);