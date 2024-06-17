// ui.js
const chalk = require("chalk");

const error = chalk.bold.red;

const warning = chalk.hex("#FFA500"); // #FFA500 is an orangy color

module.exports = {
  error,
  warning,
};