// // Client facing scripts here


// //generating random password for the user
// function generatPassword() {
//   let randomString = "";
//   let characters =
//     "$%#@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (let i = 0; i < 9; i++) {
//     randomString += characters.charAt(
//       Math.floor(Math.random() * characters.length)
//     );
//   }
//   return randomString;
// }

// //***********edit button in main************************
// $(document).ready(function() {
//   $("#Edit").on("submit", function (event) {
//     event.preventDefault();

//     //here where to get the edit url/account
//     //and to post it back
//     //*********************************************
//   })
// });


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
