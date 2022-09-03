module.exports = {
  morganPattern: "[:date[clf]] :remote-user :method :url :status :res[content-length] - :response-time ms'",
  passwordPattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
};
