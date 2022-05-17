const express = require('express');
const router = express.Router();
const cntrlCollects = require('../controllers/collect');
const cntrlSales = require('../controllers/sale');
const cntrlAdmin = require('../controllers/admin');

// collect items
router
    .route('/collectlist')
    .get(cntrlCollects.collectListAll)
    .post(cntrlCollects.collectListCreate);
router
    .route('/collectlist/:collectid')
    .get(cntrlCollects.collectListReadOne)
    .put(cntrlCollects.collectListUpdateOne)
    .delete(cntrlCollects.collectListDeleteOne);

router
    .route('/salelist')
    .get(cntrlSales.saleListAll)
    .post(cntrlSales.saleListCreate);
router
    .route('/salelist/:saleid')
    .get(cntrlSales.saleListReadOne)
    .put(cntrlSales.saleListUpdateOne)
    .delete(cntrlSales.saleListDeleteOne);

router
    .route('/adminlist')
    .get(cntrlAdmin.adminListAll)
    .post(cntrlAdmin.adminListCreate);
router
    .route('/adminlist/:adminid')
    .get(cntrlAdmin.adminListReadOne)
    .put(cntrlAdmin.adminListUpdateOne)
    .delete(cntrlAdmin.adminListDeleteOne);

module.exports = router;