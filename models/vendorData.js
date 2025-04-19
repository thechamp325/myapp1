const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorDataSchema =  new Schema({
    name: {
        type: String,
    },
    address:{
        type: String,
    },
    email:{
        type:String
    },
    aadharid:{
        type:String,
    },
    mobile:{
        type:Number
    },
    City:{
        type:String
    },
    State:{
        type:String,
    },
    Zip:{
        type: String,
    },
    ProductGroups:{
        type:[String]
    }
});

module.exports = mongoose.model("vendorData",vendorDataSchema);