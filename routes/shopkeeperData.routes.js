const express=require('express');
const router = express.Router();
const shopkeeperDataControllers = require('../controllers/shopkeeperData.controllers');

router.post("/login",shopkeeperDataControllers.login);
router.post("/postinfo",shopkeeperDataControllers.postinfo);
router.get("/getinfo",shopkeeperDataControllers.getinfo);
router.post("/addProductToOnlineShop",shopkeeperDataControllers.addProductToOnlineShop);
router.get("/getProductToOnlineShop/:id",shopkeeperDataControllers.getProductToOnlineShop);
router.post("/postinfoShopProfile",shopkeeperDataControllers.postinfoShopProfile);
router.get("/getinfoShopProfile/:id",shopkeeperDataControllers.getinfoShopProfile);
router.post("/postinfo",shopkeeperDataControllers.getVendors);
router.get("/getinfo",shopkeeperDataControllers.addVendors);

module.exports = router;