const JWT = require("jsonwebtoken");
const User = require("../models/user.model");
const Token = require("../models/token.model");
const mailgun = require("mailgun-js");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

exports.requestPasswordReset = async (email) => {
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) throw new Error("User does not exist");
  let token = await Token.findOne({ userId: user._id });
  if (token) await token.deleteOne();
  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));

  await new Token({
    userId: user._id,
    token: hash,
    createdAt: Date.now(),
  }).save();

  const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;
  console.log(link);

  const DOMAIN = "sandbox720b037f17524ce3bf085d843c73fa30";
  const api_key = "sandbox720b037f17524ce3bf085d843c73fa30.mailgun.org";
  const mg = mailgun({ apiKey: api_key, domain: DOMAIN });

var data = {
  from: "Excited User <iheanachocharlie@gmail.com>",
  to: user.email,
  subject: "Hello",
  text: "Testing some Mailgun awesomeness!",
};
  mg.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
    }
    console.log(body);
  });
};


