const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorDataSchema =  new Schema({
    name: {
        type: String,
    },
    address:{
        type: String,
    },
    trustscore:{
        type:Number
    },
    id:{
        type:Number,
    },
    phone:{
        type:Number
    }
});

module.exports = mongoose.model("vendorData",vendorDataSchema);