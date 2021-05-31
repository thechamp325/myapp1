const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseDataSchema =  new Schema({
    date: {
        type: Date,
    },
    productName:{
        type: String,
    },
    productId:{
        type: String,
    },
    txid:{
        type: String,
    },
    quantity:{
        type:Number
    },
    price:{
        type:Number
    },
    groups:{
        
    }
    

});

module.exports = mongoose.model("purchaseData",purchaseDataSchema);