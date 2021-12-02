// // Client facing scripts here

// //*****************copy password to clipboard*/
$(document).ready(function(){
  $(".cpButton").click(function(){
    /* Get the text field */
    let copyText = this;

     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  });

})

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


