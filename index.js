module.exports = {
  rulesConfig: {
    "no-shadow": 2
  },
  rules: {
    "no-shadow": require("./lib/noShadow")
  }
};
