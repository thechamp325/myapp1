const express=require('express');
const router = express.Router();
const customercontrollers = require('../controllers/customer.controllers');

router.post("/postinfo",customercontrollers.postinfo);
router.get("/getinfo",customercontrollers.getinfo);
router.post("/postinfoCart",customercontrollers.postinfoCart);
router.get("/getinfoCart/:id",customercontrollers.getinfoCart);
router.post("/postinfoOrders",customercontrollers.postinfoOrders);
router.get("/getinfoOrders",customercontrollers.getinfoOrders);

module.exports = router;