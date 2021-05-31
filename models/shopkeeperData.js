const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopkeeperDataSchema =  new Schema({
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
    }
});

module.exports = mongoose.model("shopkeeperData",shopkeeperDataSchema);