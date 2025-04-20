const salesData = require('../models/Sales');


const purchasesData= require('../models/Purchases.js');
const productData = require('../models/ProductData');


const postBillSales = async (req, res, next) => {
    try {
        const uds = req.body.data.uds;

        // Check inventory for each product
        for (let ud of uds) {
            const inventoryItem = await inventoryData.findOne({ productName: ud.productName });

            if (!inventoryItem || inventoryItem.quantity < ud.quantity) {
                return res.status(400).json({
                    message: `Insufficient quantity for ${ud.productName}`,
                    product: ud.productName,
                    available: inventoryItem ? inventoryItem.quantity : 0,
                    requested: ud.quantity
                });
            }
        }

        // Record sale and update inventory
        for (let ud of uds) {
            await new salesData(ud).save();

            const inventoryItem = await inventoryData.findOne({ productName: ud.productName });
            const updatedQty = inventoryItem.quantity - ud.quantity;

            await inventoryData.findOneAndUpdate(
                { productName: ud.productName },
                { quantity: updatedQty }
            );

            // Notify if item is sold out
            if (updatedQty === 0) {
                return res.status(200).json({
                    message: `Product ${ud.productName} has been sold out.`,
                    product: ud.productName
                });
            }
        }

        return res.status(200).json({ message: 'Sales recorded successfully.' });

    } catch (err) {
        next(err);
    }
};

const postBillPurchases = async (req, res, next) => {
    try {
        const uds = req.body.data.uds;

        for (let ud of uds) {
            // Record purchase
            await new purchasesData(ud).save();

            // Update inventory
            const inventoryItem = await inventoryData.findOne({ productName: ud.productName });

            if (inventoryItem) {
                const updatedQty = inventoryItem.quantity + ud.quantity;

                await inventoryData.findOneAndUpdate(
                    { productName: ud.productName },
                    { quantity: updatedQty }
                );
            } else {
                // New product — create inventory record
                const newInventory = new inventoryData({
                    productName: ud.productName,
                    productId: ud.productId,
                    quantity: ud.quantity
                });
                await newInventory.save();
            }
        }

        return res.status(200).json({ message: 'Purchases recorded and inventory updated.' });

    } catch (err) {
        next(err);
    }
};


const getpurchases = async (req,res,next) => {
    try{
        let data = await purchasesData.find();
        console.log(data);
        res.status(200).json(data);
    }
    catch (err){
        next(err);
    }
}

const getsales = async (req,res,next) => {
    try{
        let data = await salesData.find();
        console.log(data);
        res.status(200).json(data);
    }
    catch (err){
        next(err);
    }
}


module.exports = {
    getpurchases,
    getsales,
    postBillSales,
   postBillPurchases,
};
