const express=require('express');
const router = express.Router();
const customercontrollers = require('../controllers/customer.controllers');

router.post("/login",customercontrollers.login);

router.post("/postinfo",customercontrollers.postinfo);
router.get("/getinfo/:id",customercontrollers.getinfo);
router.post("/postinfoCart",customercontrollers.postinfoCart);
router.get("/getinfoCart/:id",customercontrollers.getinfoCart);
router.post("/postinfoOrders",customercontrollers.postinfoOrders);
router.get("/getinfoOrders",customercontrollers.getinfoOrders);
router.post("/orderspay",customercontrollers.orderspay);
router.post("/ordersuccess",customercontrollers.ordersuccess);



module.exports = router;