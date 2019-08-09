module.exports = {
  "extends": [
    "./eslint.js",
  ],
  "env": {
    "browser": true,
  },
  "rules": {
    "no-undef": "off", // throws errors on p5 variables, see:https://eslint.org/docs/rules/no-undef
  },
};