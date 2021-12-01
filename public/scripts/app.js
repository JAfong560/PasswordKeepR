// Client facing scripts here
/* const lib = require('./db/database.js');

//calling the function with a callbaclk!
lib.getUserWithId(1, (rows) => {
  console.log("The result is ", rows)
})
 */

$(document).ready(function() {

  // reset table

  $(".tPasswords").empty();

  // let fillUsers =  function(){
  //   let tPasswords = $(".tPasswords");
  //   let org = user.site_url
  //   let url = document.getElementById("inputURL")
  //   let password = document.getElementById("inputPass")
  //   let category = document.getElementById("inputCat")
  //   let newAcc = createAccount(org.value, url.value, password.value, category.value)
  //   console.log(newAcc)
  //   tPasswords.append(newAcc)
  //   }
  // fillUsers();
});
