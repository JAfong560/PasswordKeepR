// // Client facing scripts here


//generating random password for the user
function generatePassword() {
  let randomString = "";
  let characters =
    "$%#@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 9; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}

module.exports = generatePassword;
