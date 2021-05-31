const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const BookkeepingDataSchema =  new Schema({
    CustomerName: {
        type: String,
    },
    Mobile:{
        type: String,
    },
    AmountPaid:{
        type: Number,
    },
    CreditAmount:{
        type: Number,
    },
    RemainingAmount:{
        type:Number
    },
    PaymentDate:{
        type:Date
    },
    aadharid:{
        type:String
    },
    email:{
        type:String
    },
    shopid:{
        type:String
    }
    

});

module.exports = mongoose.model("BookkeepingData",BookkeepingDataSchema);