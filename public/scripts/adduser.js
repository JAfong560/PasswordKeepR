$(document).ready(function() {
  function createAccount(org, url, password, category) {
    console.log("made a new account!");
    return `<tr class="table-secondary">
    <th scope="row">${org}</th>
    <td>${url}</td>
    <td>${password}</td>
    <td>${category}</td>
    <td>
      <button type="button" class="btn btn-dark">Edit</button>
    </td>
  </tr>`
  }

  $(".collapsed").on('click', function() {
    $("#collapseOne").slideToggle("slow");
  });

  $("#addUser").submit(function (e) {
    e.preventDefault();

    console.log('clicked!');
    let tPasswords = $(".tPasswords");
    let org = document.getElementById("inputOrg")
    let url = document.getElementById("inputURL")
    let password = document.getElementById("inputPass")
    let category = document.getElementById("inputCat")
    let newAcc = createAccount(org.value, url.value, password.value, category.value)
    console.log(newAcc)
    tPasswords.append(newAcc);
  });
});
