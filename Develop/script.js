// Assignment code here

var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers   = "0123456789";
var special   = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Password prompt
  var passwordLengthInput = prompt("How many characters would you like your password to be?")
  console.log(passwordLengthInput)
  if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput))
  {
  alert("Please enter a number between 8 and 128");
  return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
