const express=require('express');
const router = express.Router();
const financecontrollers = require('../controllers/finance.controllers');

router.post("/postBillSales",financecontrollers.postBillSales);
router.post("/postBillPurchases",financecontrollers.postBillPurchases);
router.get("/getPurchases",financecontrollers.getpurchases);
router.get("/getSales",financecontrollers.getsales);

module.exports = router;