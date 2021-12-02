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
