const express=require('express');
const router = express.Router();
const usercontrollers = require('../controllers/user.controllers');



router.get("/user",usercontrollers.getinfo);
router.post("/info",usercontrollers.postinfo);


router.post("/addvendor",usercontrollers.addVendor);

module.exports = router;