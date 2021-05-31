const express=require('express');
const router = express.Router();
const bookkeepingcontrollers = require('../controllers/bookkeeping.controllers');

router.post("/postinfo",bookkeepingcontrollers.postinfo);
router.get("/getinfo/:id",bookkeepingcontrollers.getinfo);

module.exports = router;