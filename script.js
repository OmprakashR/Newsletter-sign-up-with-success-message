function ValidateEmail(input) {
  var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




  if (input.value.match(validRegex)) {
    document.form1.text1.focus();
    document.getElementById("emailval").classList.remove("email-val");
    showmodel();
  } else {
     
    document.getElementById("emailval").classList.add("email-val");
  }
}

 
function showmodel() {

  var x = document.getElementById("inputsub").value;
  document.getElementById("emailtext").innerHTML = x;


  document.getElementById("thankyou").style.display = "flex";


 
}

function hidebox() {
  document.getElementById("thankyou").style.display = "none";
}


 
