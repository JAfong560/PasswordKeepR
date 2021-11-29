// Client facing scripts here


//generating random password for the user
function generatPassword() {
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

//***********edit button in main************************
$(document).ready(function() {
  $("#Edit").on("submit", function (event) {
    event.preventDefault();

    //here where to get the edit url/account
    //and to post it back
    //*********************************************
  })
});
