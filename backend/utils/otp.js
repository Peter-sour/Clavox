function generateOTP() {
  return Math.floor(10000 + Math.random() * 90000).toString(); // 5 digit
}

module.exports = { generateOTP };
