const express=require('express');
const router = express.Router();
const inventorycontrollers = require('../controllers/inventory.controllers');

router.post("/addGroups",inventorycontrollers.addGroups);
router.post("/addItemsToGroups",inventorycontrollers.addItemsToGroups);
router.get("/getGroupItems/:id",inventorycontrollers.getGroupItems);
router.get("/allGroups/:id",inventorycontrollers.getAllGroups);

// router.get("/getSales",inventorycontrollers.getsales);

module.exports = router;