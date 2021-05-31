const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({ 
    name: {
        type: String,
    }
    });

const GroupDataSchema =  new Schema({
    name:{
        type: String,
        unique: true,
    },
    items : {
        type: [ItemsSchema],
    }

});

module.exports = mongoose.model("GroupData",GroupDataSchema);