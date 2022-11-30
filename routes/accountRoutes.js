const express = require('express');
const {
    addAccount,
    getAccount,
    doTransaction,
    getTransactions,

} = require('../controllers/accountControllers');

const router = express.Router();

router.post('/addAccount', addAccount);
router.get('/getAccount', getAccount);
router.post('/doTransaction', doTransaction);
router.get('/getTransactions', getTransactions);

module.exports = router;