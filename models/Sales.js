const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesDataSchema =  new Schema({
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
    }

});

module.exports = mongoose.model("salesData",salesDataSchema);