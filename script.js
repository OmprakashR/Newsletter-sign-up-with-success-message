function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    document.form1.text1.focus();
    document.getElementById("emailval").classList.remove("email-val");
    showmodel();
  } else {
    document.form1.text1.focus();
    document.getElementById("emailval").classList.add("email-val");
  }
}

function showmodel() {
  document.getElementById("thankyou").style.display = "flex";
}

function hidebox() {
  document.getElementById("thankyou").style.display = "none";
}
