function validator() {
  var first = document.getElementById("firstnameipt").value;
  var last = document.getElementById("lastnameipt").value;
  var email = document.getElementById("emailipt").value;
  var numb = document.getElementById("numbeript").value;
  var pass = document.getElementById("passwordipt").value;

  if (first == null || first == "") {
    document.getElementById("msglab1").innerHTML = "Enter First name";
  } else {
    document.getElementById("msglab1").innerHTML = "";
  }
  if (last == null || last == "") {
    document.getElementById("msglab2").innerHTML = "Enter Last name";
  } else {
    document.getElementById("msglab2").innerHTML = "";
  }
  if (email == null || email == "") {
    document.getElementById("msglab3").innerHTML = "Enter Valid Email";
  } else {
    document.getElementById("msglab3").innerHTML = "";
  }
  if (numb.length < 10) {
    document.getElementById("msglab4").innerHTML = "Enter a valid phone number";
  } else {
    document.getElementById("msglab4").innerHTML = "";
  }
  if (pass.length < 8) {
    document.getElementById("msglab5").innerHTML =
      "Password must be min 8 characters long";
  } else {
    document.getElementById("msglab5").innerHTML = "";
  }
  if (pass > 8) {
    if (pass != 1234567890 && pass != "!@#$%^&*()_-/?=+<>,.;:") {
      document.getElementById("msglab5").innerHTML =
        "Combination of numbers, text and special characters";
    } else {
      document.getElementById("msglab5").innerHTML = "";
    }
  }
}
