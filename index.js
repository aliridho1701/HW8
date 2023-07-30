const express =require('express');
const router =express.Router();
const categoriesRouter = require('./category');
const filmRouter = require ('./film')

router.use('./category', categoriesRouter)
router.use('./film', filmRouter)

module.exports = router;