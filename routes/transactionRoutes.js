const express = require('express');
const { addTransaction, getAllTransaction, editTransaction,deleteTransaction} = require('../controllers/transactionController');

//router object
const router = express.Router();

//routers

//addTransaction post method
router.post('/add-transaction',addTransaction);
//editTransaction post method
router.post('/edit-transaction',editTransaction);
//deleteTransaction post method
router.post('/delete-transaction',deleteTransaction);

//getTransaction
router.post('/get-transaction',getAllTransaction);

module.exports = router;