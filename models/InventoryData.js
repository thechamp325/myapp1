const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    productName: { type: String, required: true, unique: true },
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
});

module.exports = mongoose.model("InventoryData", inventorySchema);
