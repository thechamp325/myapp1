const express=require('express');
const router = express.Router();
const shopkeeperDataControllers = require('../controllers/shopkeeperData.controllers');

router.post("/postinfo",shopkeeperDataControllers.postinfo);
router.get("/getinfo",shopkeeperDataControllers.getinfo);
router.post("/addProductToOnlineShop",shopkeeperDataControllers.addProductToOnlineShop);
router.get("/getProductToOnlineShop/:id",shopkeeperDataControllers.getProductToOnlineShop);
router.post("/postinfoShopProfile",shopkeeperDataControllers.postinfoShopProfile);
router.get("/getinfoShopProfile/:id",shopkeeperDataControllers.getinfoShopProfile);


module.exports = router;