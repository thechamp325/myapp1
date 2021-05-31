const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ShopProfileDataSchema =  new Schema({
    aadharid: {
        type: String,
    },
    Name:{
        type: String,
    },
    State:{
        type: String,
    },
    District:{
        type: String,
    },
    Taluka:{
        type:String
    },
    Pincode:{
        type:String
    },
    Location:{
        type:String
    },
    shopid:{
        type:String
    }
    

});

module.exports = mongoose.model("ShopProfileData",ShopProfileDataSchema);