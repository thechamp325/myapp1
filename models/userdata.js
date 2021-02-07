const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    name: {
        type: String,
    },
    age:{
        type: Number,
    }
});

module.exports = mongoose.model("userdata",userSchema);