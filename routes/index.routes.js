const express = require('express');
const router = express.Router();
const home = require("./home");
const finance = require("./finance");
const customerRoutes = require("./customer.routes");
const shopkeeperDataRoutes = require("./shopkeeperData.routes");
const inventoryRoutes = require("./inventory.routes");
const bookkeepingRoutes = require("./bookkeeping.routes");



router.use("/home", home);
router.use("/finance", finance);
router.use("/customer", customerRoutes);

router.use("/shopkeeperData", shopkeeperDataRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/bookkeeping", bookkeepingRoutes);





module.exports = router;