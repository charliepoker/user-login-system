const nodemailer = require("nodemailer");

// create transporter object with smtp server details
exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "iheanachocharlie@gmail.com",
    pass: "adaobi2009",
    clientId:
      "516844654303-i76chdpj507ek3ptut112q50skpdp5d8.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "ya29.a0ARrdaM8Ocjqnz8jS85nRDs8oQ7W20jEdGvxCEvGD73OYikAOtsiFcLowFKUmN78NxwKFrf2BUVULUQqwx2W2Ucv5PKq0J-_qH0W6R1ixIJerFP9eGYe67MUqACGvdlTYofcWZO5ptR2YRyVDPiCEEvHxGyHF",
  },
});


