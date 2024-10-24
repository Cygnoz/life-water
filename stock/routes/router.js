const express = require('express');
const router = express.Router();
const stockController = require('../controller/StockController');
const itemController = require('../controller/ItemController');

//Stock
router.post('/stock', stockController.addStock);
router.get('/stock', stockController.getAllStock);
router.get('/stockstats', stockController.getStockStats);
router.put('/internaltransfer', stockController.internalTransfer);

//Item
router.post('/item', itemController.addItem);
router.get('/item', itemController.getItems);
router.put('/item/:id', itemController.updateItem);
router.delete('/item/:id', itemController.deleteItem);


module.exports = router;