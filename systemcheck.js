const os = require("os");

function hostName() {
  // console.log("The hostname is", os.hostname());
  return os.hostname();
}

function userInfo() {
  // console.log("The user info is", os.userInfo());
  return os.userInfo();
}

// Small app:
console.log(hostName());
console.log(userInfo());

module.exports = {
  hostName,
  userInfo,
};